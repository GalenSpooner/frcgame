create table if not exists public.botdle_scores (
  id uuid primary key default gen_random_uuid(),
  client_id text,
  player_name text not null default 'Anonymous',
  guesses integer not null check (guesses between 1 and 8),
  team_number integer not null,
  team_name text not null,
  answer_rank integer,
  won boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.botdle_scores
add column if not exists client_id text;

alter table public.botdle_scores enable row level security;

drop policy if exists "Botdle scores are public" on public.botdle_scores;
create policy "Botdle scores are public"
on public.botdle_scores
for select
to anon
using (true);

drop policy if exists "Anyone can submit Botdle wins" on public.botdle_scores;

revoke insert, update, delete on public.botdle_scores from anon, authenticated;

create or replace function public.submit_botdle_score(
  p_client_id text,
  p_player_name text,
  p_guesses integer,
  p_team_number integer,
  p_team_name text,
  p_answer_rank integer
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  clean_client_id text := nullif(trim(p_client_id), '');
  clean_player_name text := left(nullif(trim(p_player_name), ''), 24);
  clean_team_name text := left(nullif(trim(p_team_name), ''), 80);
  recent_duplicate boolean;
begin
  if clean_client_id is null or char_length(clean_client_id) > 80 then
    raise exception 'Invalid client id';
  end if;

  if clean_player_name is null then
    clean_player_name := 'Anonymous';
  end if;

  if p_guesses < 1 or p_guesses > 8 then
    raise exception 'Invalid guess count';
  end if;

  if p_team_number <= 0 or clean_team_name is null then
    raise exception 'Invalid team';
  end if;

  select exists (
    select 1
    from public.botdle_scores
    where client_id = clean_client_id
      and team_number = p_team_number
      and created_at > now() - interval '10 minutes'
  )
  into recent_duplicate;

  if recent_duplicate then
    return;
  end if;

  insert into public.botdle_scores (
    client_id,
    player_name,
    guesses,
    team_number,
    team_name,
    answer_rank,
    won
  )
  values (
    clean_client_id,
    clean_player_name,
    p_guesses,
    p_team_number,
    clean_team_name,
    p_answer_rank,
    true
  );
end;
$$;

revoke all on function public.submit_botdle_score(text, text, integer, integer, text, integer) from public;
grant execute on function public.submit_botdle_score(text, text, integer, integer, text, integer) to anon;
