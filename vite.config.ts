import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const pagesUrl = env.CI_PAGES_URL;
  const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1];
  const base = pagesUrl
    ? pagesUrl.replace(/^https?:\/\/[^/]+/, "").replace(/\/?$/, "/")
    : repositoryName
      ? `/${repositoryName}/`
      : "/";

  return {
    base,
    plugins: [react()],
    build: {
      outDir: "docs",
    },
  };
});
