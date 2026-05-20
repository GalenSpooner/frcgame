create table if not exists public.botdle_scores (
  id uuid primary key default gen_random_uuid(),
  player_name text not null default 'Anonymous',
  guesses integer not null check (guesses between 1 and 8),
  team_number integer not null,
  team_name text not null,
  answer_rank integer,
  won boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.botdle_scores enable row level security;

drop policy if exists "Botdle scores are public" on public.botdle_scores;
create policy "Botdle scores are public"
on public.botdle_scores
for select
to anon
using (true);

drop policy if exists "Anyone can submit Botdle wins" on public.botdle_scores;
create policy "Anyone can submit Botdle wins"
on public.botdle_scores
for insert
to anon
with check (
  won = true
  and guesses between 1 and 8
  and char_length(player_name) between 1 and 24
  and team_number > 0
  and char_length(team_name) between 1 and 80
);
