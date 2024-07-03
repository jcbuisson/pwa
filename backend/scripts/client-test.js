import io from 'socket.io-client'
import expressXClient from '@jcbuisson/express-x-client'

const socket = io("http://localhost:8000", { debug: true })

const app = expressXClient(socket)

const x = await app.service('notification').addSubscription(1, {})
console.log('x', x)
