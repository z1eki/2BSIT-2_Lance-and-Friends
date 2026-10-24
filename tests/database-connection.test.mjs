import assert from "node:assert/strict";
import { test } from "node:test";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

test("Supabase PostgREST database API is reachable", async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  assert.ok(url, "Set NEXT_PUBLIC_SUPABASE_URL in .env.local");
  assert.ok(anonKey, "Set NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });

  assert.ok(
    response.ok,
    `Supabase returned HTTP ${response.status} ${response.statusText}`,
  );
});
