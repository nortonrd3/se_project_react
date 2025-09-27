import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Always use root for server deployment
  plugins: [react()],
  server: {
    port: 3000,
  },
});
