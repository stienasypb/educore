import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const pagesUrl = loadEnv(mode, ".", "").CI_PAGES_URL;
  const base = pagesUrl
    ? pagesUrl.replace(/^https?:\/\/[^/]+/, "").replace(/\/?$/, "/")
    : "/";

  return {
    base,
    plugins: [react()],
    build: {
      outDir: "docs",
    },
  };
});
