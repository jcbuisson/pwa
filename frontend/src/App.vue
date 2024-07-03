<template>
   <div class="m-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">

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

      </div>
   </div>
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
