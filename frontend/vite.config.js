import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// see: https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
   console.log('mode=', mode, 'command=', command) // visible in the terminal where `npm run dev` or `npm run preview` is executed
   return {
      plugins: [
         vue({}),
      ],
      server: {
         port: 8000,
         open: true,
         host: true, // allows for external device connection on local network
         proxy: {
            '^/pwa-socket-io/.*': {
               target: 'http://localhost:3000',
               ws: true,
               secure: false,
               changeOrigin: true,
            },
         }
      },
   }
})
