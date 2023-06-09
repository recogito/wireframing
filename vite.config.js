import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => ({
  plugins: [ react() ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
        }
      }
    }
  }
}));