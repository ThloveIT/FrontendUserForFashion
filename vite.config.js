import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7264', // Địa chỉ backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Loại bỏ '/api' khỏi path
      },
      '/images': { // Thêm proxy cho file tĩnh
        target: 'https://localhost:7264',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/images/, '/images/products'),
      },
    },
  },
});