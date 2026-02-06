import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    // Use a Vercel-aware base so assets load correctly on Vercel (/) and
    // preserve the GitHub Pages base when `VERCEL` is not set.
    base: process.env.VERCEL ? "/" : "/Portfolio/",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // add your aliases here if needed
      },
    },
  };
});
