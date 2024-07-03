<template>
   <div class="m-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
         
         <div class="px-6 pt-4 pb-2">
            <input v-model="text" />
         </div>
         
         <div class="px-6 pt-4 pb-2">
            <button type="button" @click="push" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Push
            </button>
         </div>

      </div>
   </div>
</template>

<script setup>
import { ref } from "vue"

import { app } from '/src/client-app.js'


const text = ref('MESSAGE DE TEST')

const push = async () => {
   if ('Notification' in window) {
      app.service('notification').pushNotification(1, { a: 123, b: 456, title: "MON TITRE", text: text.value })
   }
}
</script>
