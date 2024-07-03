
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
declare let self: ServiceWorkerGlobalScope

console.log('self', self)
console.log('self.addEventListener', self.addEventListener)

// prompt for new content
self.addEventListener('message', (event) => {
   console.log('sw message!')
   if (event.data && event.data.type === 'SKIP_WAITING')
     self.skipWaiting()
})

// cleanup outdated cached assets
cleanupOutdatedCaches()

// cache assets
precacheAndRoute(self.__WB_MANIFEST)
