# Lance and Friends

Next.js App Router starter with Tailwind CSS and reusable Supabase browser/server clients.

## Getting started

1. Install Node.js 20.9 or newer.
2. From this project directory, install dependencies:

   ```powershell
   npm install
   ```

3. Copy the environment template and set the URL and anon key from your Supabase project:

   ```powershell
   Copy-Item .env.local.example .env.local
   ```

4. Start the development server:

   ```powershell
   npm run dev
   ```

Open http://localhost:3000 to view the app.

## Supabase connection test

With valid values set in `.env.local`, run:

```powershell
npm run test:db
```

This test calls the project's PostgREST root endpoint with the anon key, so it checks API connectivity without assuming any application tables have been created.

## Project structure

- `src/app/`: App Router page, root layout, and Tailwind stylesheet.
- `src/lib/supabase/`: shared environment validation and browser/server Supabase client factories.
- `tests/`: Node.js database API connectivity test.
- `.env.local.example`: local Supabase environment-variable template.

Use `createBrowserSupabaseClient` from `src/lib/supabase/client.ts` in client components and `await createServerSupabaseClient()` from `src/lib/supabase/server.ts` in server components, route handlers, or server actions.