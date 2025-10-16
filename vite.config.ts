import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // :point_down: Add the 'preview' block here
  preview: {
    allowedHosts: [
      'bosswallah.ai','www.bosswallah.ai' // :point_left: This is the required fix
    ],
  },
  // :point_up_2: End of 'preview' block
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
