import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {//development
    watch: {//development
      usePolling: true,//development
    },//development
    host: '0.0.0.0',//development
    port: 5175,//development
  },//development
})
