import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // REPLACE 'your-repo-name' with your actual repository name (e.g., 'portfolio')
  // If your repo is at github.com/williamsokol/my-site, then base is '/my-site/'
  base: '/IT-Portfolio/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: true,
  }
});