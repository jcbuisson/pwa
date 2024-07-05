<template>

   <!-- modèle CSS : https://immatriculation.ants.gouv.fr/demarches-en-ligne/vendre-ou-donner-votre-vehicule -->

   <main class="flex container max-w-7xl p-2" style="background-color: #EFF4FD; color: #353535;">

      <div class="w-0 md:w-64"></div>

      <div>

         <h1 class="mt-8 mb-6">Les applications <span><img class="h-16 w-16 inline-block" src="/img/icons/pwa-192x192.png" /></span></h1>

         <ul class="list-disc list-inside custom-colored-dots2">
            <li>accessibles via un navigateur web et diffusables en un clic via une url</li>
            <li>faciles à mettre à jour</li>
            <li>utilisables sur PC ou mobiles ou tablettes de tous types</li>
            <li>s'installent sur les écrans d'accueil et reçoivent des notifications</li>
            <li>peuvent s'installer aussi depuis les stores</li>
         </ul>

         <div class="mt-8">
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">1</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Créez un utilisateur
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               <div class="flex flex-col gap-6">
                  <div class="flex flex-col">
                     <label>
                        Nom de l'utilisateur
                     </label>
                     <input v-model="alias" class="standard-input" placeholder="Entrer un nom">
                  </div>
               </div>

               <div class="justify-center flex my-2">
                  <button class="mybtn bg-blue-900 hover:bg-blue-700 disabled:bg-blue-700 disabled:cursor-not-allowed text-white py-2 px-12"
                        :disabled="!alias" @click="createUser">
                     Créer utilisateur
                  </button>
               </div>
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div v-if="user">
            <div class="bg-white flex w-full md:max-w-fit" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">2</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Ouvrez l'application pour <span class="text-red-300">{{ user?.alias }}</span> dans un navigateur mobile, PC ou Mac
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               <p>Sur PC/windows, MacOS, iOS, Android, ouvrez ce lien dans un navigateur :</p>

               <p class="ml-4">
                  <a class="text-blue-500 hover:underline" :href="url" target="_blank">
                     {{ url }}
                  </a>
               </p>

            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div v-if="user">
            <div class="bg-white flex w-full md:max-w-fit" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">3</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Installez l'application sur l'écran d'accueil
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
                     <div role="tablist" class="tabs tabs-bordered">
                        <a class="tab tab-active">Android</a>
                        <a class="tab">iOS</a>
                        <a class="tab">PC/Chrome</a>
                        <a class="tab">PC/Firefox</a>
                        <a class="tab">Mac/Safari</a>
                     </div>

                     <div class="flex">
                        <img src="/img/install-pwa-chrome.png" class="h-24" />
                        <img src="/img/install-pwa-safari.png" class="h-24" />
                     </div>
                     <!-- <div class="flex">
                        <img src="/img/install-desktop-android.png" class="h-24" />
                        <img src="/img/install-desktop-safari.png" class="h-12" />
                     </div>
                     <div class="flex">
                        <img src="/img/install-app-android.png" class="h-24" />
                        <img src="/img/install-app-ios.png" class="h-24" />
                     </div> -->
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div v-if="user">
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">4</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Autorisez les notifications
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               Bla-bla
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div v-if="user">
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">5</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Envoyez des notifications !
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               <div class="flex flex-col gap-6">
                  <div class="flex flex-col">
                     <label>
                        Titre de la notification
                     </label>
                     <input v-model="title" class="standard-input" placeholder="Entrer un titre">
                  </div>

                  <div class="flex flex-col">
                     <label>
                        Texte de la notification
                     </label>
                     <input v-model="text" class="standard-input" placeholder="Entrer un message">
                  </div>
               </div>

               <div class="justify-center flex mt-4 mb-1">
                  <button class="bg-blue-900 hover:bg-blue-700 disabled:bg-blue-700 disabled:cursor-not-allowed text-white py-2 px-12"
                        @click="push">
                     Envoyer notification
                  </button>
               </div>
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div v-if="user">
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">6</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Déclenchez une mise à jour de l'application
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               Bla-bla
            </div>
         </div>

      </div>

   </main>
</template>

<style scoped>
/* Custom CSS to color the bullets */
ul.custom-colored-dots > li::marker {
   color: #ff6347;
}
ul.custom-colored-dots2 > li::marker {
   color: #6AB3F9;
}
</style>

<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { ref, computed } from "vue"

import { app } from '/src/client-app.js'


const alias = ref('Chris')
const title = ref('Info')
const text = ref('Hello!')
const user = ref()

const createUser = async () => {
   user.value = await app.service('notification').createUser(alias.value)
}

const url = computed(() => `https://pwa-appli.jcbuisson.dev/${user.value?.id || ''}`)

const push = async () => {
   if ('Notification' in window) {
      app.service('notification').pushNotification(user.value.id, { title: title.value, text: text.value })
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
         if (needRefresh.value) {
            // update app
            console.log('updating app..!')
            updateServiceWorker()
         }

      }, 20000 /* check every 20s */)
   },
})
</script>
