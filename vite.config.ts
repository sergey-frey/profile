import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const isProd = process.env.MODE === "production";
const base = isProd ? "/profile/" : "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [svelte()],
});
