import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: 'https://github.com/Jetronite/Vue-Ticket-App', // <-- replace with your repo name
  plugins: [vue()],
});
