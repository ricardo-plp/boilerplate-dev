// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Incluez ici vos options Sass si nécessaire
      },
    },
  },
  // Votre configuration Vite ici
});
