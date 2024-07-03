
export function urlB64ToUint8Array(base64String) {
   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
   const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
   const rawData = atob(base64)
   const outputArray = new Uint8Array(rawData.length)
   for (let i = 0; i < rawData.length; ++i) {
     outputArray[i] = rawData.charCodeAt(i)
   }
   return outputArray
}

export async function getWebPushSubscription() {
   try {
      const register = await navigator.serviceWorker.register('/sw.js', { scope: '/' })
      console.log('register', register)
      const vapidPublicKey = import.meta.env.VITE_APP_VAPID_PUBLIC_KEY
      console.log('vapidPublicKey', vapidPublicKey)
      const subscription = await register.pushManager.subscribe({
         userVisibleOnly: true,
         applicationServerKey: urlB64ToUint8Array(vapidPublicKey),
      })
      console.log('subscription', subscription)
      return subscription
   } catch(err) {
      console.log("Pb with push registration", err)
   }
}
