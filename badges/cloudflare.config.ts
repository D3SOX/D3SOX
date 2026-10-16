import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "d3sox-profile-badges",
    compatibilityDate: "2026-10-16",
    workersDev: true,
    previewUrls: false,
    assets: { notFoundHandling: "none" },
    observability: {
      enabled: true,
      traces: { enabled: true },
    },
  },
});
