import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {//configuraciones para desarrollo en docker-compose.yml
    watch: {//configuraciones para desarrollo en docker-compose.yml
      usePolling: true,//configuraciones para desarrollo en docker-compose.yml
    },//configuraciones para desarrollo en docker-compose.yml
    host: '0.0.0.0',//configuraciones para desarrollo en docker-compose.yml
    port: 5175,//configuraciones para desarrollo en docker-compose.yml
    proxy: {
      '/apiuser': {
        target: 'https://almacen_igecem.edomex.gob.mx',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/apiuser/, '/apiuser')
      }
    }
  },//configuraciones para desarrollo en docker-compose.yml
})
