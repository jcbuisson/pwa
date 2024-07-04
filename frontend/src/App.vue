<template>

   <main class="flex container max-w-7xl p-2" style="background-color: #EFF4FD; color: #353535;">

      <div class="w-0 md:w-64"></div>

      <div>
         <div>
            <div class="bg-white flex w-full md:max-w-fit" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">1</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Installez la <span><img class="h-12 w-12 inline-block" src="/img/icons/pwa-192x192.png" /></span> comme une application
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               <ul>
                  <li>- Sur PC/windows, MacOS, iOS, Android, ouvrez ce lien dans un navigateur :
                     <a class="link hover:underline" href="https://pwa-appli.jcbuisson.dev">https://pwa-appli.jcbuisson.dev</a>
                  </li>
                  <li>
                     - Faites-le sur autant de devices que voulu : PC/windows, Mac, iOS, Android
                  </li>
                  <li>
                     - Mettez l'application sur l'écran d'accueil
                  </li>
               </ul>
               <div class="flex">
                  <img src="/img/install-pwa-chrome.png" class="h-24" />
                  <img src="/img/install-pwa-safari.png" class="h-24" />
               </div>
               <div class="flex">
                  <img src="/img/install-desktop-android.png" class="h-24" />
                  <img src="/img/install-desktop-safari.png" class="h-12" />
               </div>
               <div class="flex">
                  <img src="/img/install-app-android.png" class="h-24" />
                  <img src="/img/install-app-ios.png" class="h-24" />
               </div>
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div>
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">2</span>
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

         <div>
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">3</span>
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

               <div class="justify-center flex">
                  <button class="primary-btn mt-4 mb-1" @click="push">
                     Envoyer notification
                  </button>
               </div>
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

         <div>
            <div class="bg-white flex" style="padding: 24px 16px; font-size: 1.3rem; align-items: center;">
               <span class="w-12 h-12 rounded-full flex items-center" style="background-color: #FEECDE; color: #FB9B4D;">
                  <span class="w-full text-center text-3xl">4</span>
               </span>
               <div class="inline-block" style="color: #353535; margin-left: 20px;">
                  Déclenchez une mise à jour de l'application
               </div>
            </div>
            <div class="" style="min-height: 50px; background-color: #FEECDE; color: #353535; padding: 16px;">
               Bla-bla
            </div>
         </div>
         <div class="" style="margin-left: 40px; height: 50px; border-left: 2px dashed #FBA45D;"></div>

      </div>


      <!-- <section class="w-full flex justify-end gap-6">

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

         <div class="justify-center flex my-8">
            <button class="primary-btn" @click="push">
               Envoyer notification
            </button>
         </div>

      </section> -->

   </main>
</template>

<script setup>
import { ref } from "vue"

import { app } from '/src/client-app.js'


const title = ref('MESSAGE')
const text = ref('Hello!')

const push = async () => {
   if ('Notification' in window) {
      app.service('notification').pushNotification(1, { a: 123, b: 456, title: title.value, text: text.value })
   }
}
</script>
