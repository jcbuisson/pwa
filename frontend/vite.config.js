import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// see: https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
   console.log('mode=', mode, 'command=', command) // visible in the terminal where `npm run dev` or `npm run preview` is executed
   return {
      plugins: [
         vue({}),
         VitePWA({
            devOptions: {
               enabled: true
            },
            mode: "development",
            base: "/",
            srcDir: "src",
            filename: "sw.ts",
            includeAssets: ["/favicon.png"],
            strategies: "injectManifest",
            manifest: {
               name: "PWA",
               short_name: "PWA",
               theme_color: "#ffffff",
               start_url: "/",
               display: "standalone",
               background_color: "#ffffff",
               icons: [
                  {
                     src: "img/icons/pwa-192x192.png",
                     sizes: "192x192",
                     type: "image/png",
                  },
                  {
                     src: "img/icons/pwa-512x512.png",
                     sizes: "512x512",
                     type: "image/png",
                  },
                  {
                     src: "img/icons/pwa-512x512.png",
                     sizes: "512x512",
                     type: "image/png",
                     purpose: "any maskable",
                  },
               ],
            },
         }),
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
