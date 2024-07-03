import { io } from "socket.io-client"

import expressXClient from '@jcbuisson/express-x-client'


const socket = io({
   path: '/pwa-socket-io/',
   transports: ["websocket"],
   reconnectionDelay: 1000,
   reconnectionDelayMax: 10000,
   extraHeaders: {
      "bearer-token": "mytoken"
   }
})

export const app = expressXClient(socket, { debug: true })
