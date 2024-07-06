<template>

   <div v-if="needRefresh" class="fixed bottom-0 right-0 m-4 p-4 bg-green-100 border-solid rounded z-10">
      Une nouvelle version est disponible <a href="#" class="text-blue-400 hover:underline" @click="updateServiceWorker">installer</a>
   </div>

   <div class="m-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">

         <h1>Hello {{ userId }}</h1>

         <div class="px-6 pt-4 pb-2">
            <button type="button" @click="subscribe" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Souscrire
            </button>
         </div>

         <div class="px-6 pt-4 pb-2">
            <button type="button" @click="unsubscribe" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Désinscrire
            </button>
         </div>

      </div>
   </div>
</template>

<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { useLocalStorage } from '@vueuse/core'


import { getWebPushSubscription } from '/src/utilities.js'
import { app } from '/src/client-app.js'

// `userId` is saved in localStorage on first run in browser, because PWA on home screen doesn't see/maintain window.location.pathname
const userId = useLocalStorage('userId', window.location.pathname.substring(1))


const subscribe = async () => {
   if ('Notification' in window) {
      const subscription = await getWebPushSubscription()
      console.log('userId', userId.value)
      app.service('notification').addSubscription(parseInt(userId.value), subscription)
   }
}

const unsubscribe = async () => {
   if ('Notification' in window) {
      const subscription = await getWebPushSubscription()
      console.log('userId', userId.value)
      app.service('notification').deleteSubscription(parseInt(userId.value), subscription)
   }
}

/////////////////      AUTOMATIC VERSION UPDATE     ////////////////

// POSSIBLE DE SIMPLIFIER AVEC registerType: 'autoUpdate'
// VOIR : https://vite-pwa-org.netlify.app/guide/auto-update.html

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
   immediate: true,
   onRegistered(r) {
      console.log(`SW onRegistered: ${r}`)
      r && setInterval(async() => {
         console.log('Checking for sw update')
         await r.update()
         console.log('needRefresh', needRefresh.value)
         // if (needRefresh.value) {
         //    // update app
         //    console.log('updating app..!')
         //    updateServiceWorker()
         // }

      }, 20000 /* check every 20s */)
   },
})
</script>
