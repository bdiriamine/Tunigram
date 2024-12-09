import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for cleaner imports
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Ensure entry point is explicitly set
    },
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
  },
  server: {
    host: true, // Enables access from network
    port: 5173, // Default Vite port
    open: true, // Opens browser automatically
  },
  base: './', // Ensure relative paths for assets (important for subdirectory hosting)
});