import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    // Keeps imports reading `@/lib/site` rather than a trail of ../../
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    // Pinned off Vite's default 5173, which another project on this machine
    // already uses. strictPort makes a clash fail loudly instead of silently
    // moving to another port.
    port: 5180,
    strictPort: true,

    // Answer on the LAN too, so the site can be opened on a phone
    // at http://<your-ip>:5180 during development.
    host: true,
  },
});
