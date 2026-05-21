# Supabase leaderboard setup

Botdle uses Supabase through the browser-safe REST API. Do not put the Postgres password or service-role key in the app.

1. Open Supabase SQL Editor.
2. Run `supabase-schema.sql`. Run it again whenever this repo updates the schema.
3. Open Project Settings > API.
4. Copy the project `anon` public key.
5. Paste it into `config.js`:

```js
window.BOTDLE_SUPABASE = {
  url: "https://nrmivsxawyutvphosswc.supabase.co",
  anonKey: "your-anon-public-key"
};
```

The anon key is meant to be public. The table is protected by Row Level Security, and direct public inserts are blocked. Browser clients submit wins through the `submit_botdle_score` RPC created by `supabase-schema.sql`.

This hardens the leaderboard against casual code edits and direct REST inserts. A fully cheat-proof leaderboard would require moving the game answer and guess validation to a server or Supabase Edge Function, because browser JavaScript can always be inspected or modified by the player.
