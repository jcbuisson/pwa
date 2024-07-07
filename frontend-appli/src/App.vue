<template>

   <div v-if="needRefresh" class="fixed bottom-0 right-0 m-4 p-4 bg-green-100 border-solid rounded z-10">
      Une nouvelle version est disponible <a href="#" class="text-blue-400 hover:underline" @click="updateServiceWorker">installer</a>
   </div>

   <div class="m-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">

         <div class="flex flex-col gap-6">
            <div class="flex flex-col">
               <label>
                  Nom de l'utilisateur
               </label>
               <input v-model="alias" class="standard-input" placeholder="Entrer un nom">
            </div>
         </div>

         <div class="w-full flex justify-center my-4">
            <button class="mybtn bg-blue-900 hover:bg-blue-700 disabled:bg-blue-200 disabled:cursor-not-allowed text-white py-2 px-12"
                  :disabled="!alias" @click="subscribe">
                  Souscrire aux notification
            </button>
         </div>

         <div class="w-full flex justify-center my-4">
            <button class="mybtn bg-blue-900 hover:bg-blue-700 disabled:bg-blue-200 disabled:cursor-not-allowed text-white py-2 px-12"
                  :disabled="!alias" @click="unsubscribe">
                  Désinscrire des notification
            </button>
         </div>

      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'


import { getWebPushSubscription } from '/src/utilities.js'
import { app } from '/src/client-app.js'

const alias = ref()

const subscribe = async () => {
   if ('Notification' in window) {
      const subscription = await getWebPushSubscription()
      const userList = await app.service('user').findMany({ where: { alias: alias.value }})
      for (const user of userList) {
         app.service('notification').addSubscription(user.id, subscription)
      }
   }
}

const unsubscribe = async () => {
   if ('Notification' in window) {
      const subscription = await getWebPushSubscription()
      const userList = await app.service('user').findMany({ where: { alias: alias.value }})
      for (const user of userList) {
         app.service('notification').deleteSubscription(user.id, subscription)
      }
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
