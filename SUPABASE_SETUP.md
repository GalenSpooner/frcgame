# Supabase leaderboard setup

Botdle uses Supabase through the browser-safe REST API. Do not put the Postgres password or service-role key in the app.

1. Open Supabase SQL Editor.
2. Run `supabase-schema.sql`.
3. Open Project Settings > API.
4. Copy the project `anon` public key.
5. Paste it into `config.js`:

```js
window.BOTDLE_SUPABASE = {
  url: "https://nrmivsxawyutvphosswc.supabase.co",
  anonKey: "your-anon-public-key"
};
```

The anon key is meant to be public, but the table stays protected by Row Level Security policies from `supabase-schema.sql`.
