import { expressX } from '@jcbuisson/express-x'
import { PrismaClient } from '@prisma/client'

import notificationService from './services/notification.service.mjs'
import userService from './services/user.service.mjs'


const app = expressX({
   WS_TRANSPORT: true,
   WS_PATH: '/pwa-socket-io/',
})
const prisma = new PrismaClient()
app.set('prisma', prisma)

app.configure(notificationService)
app.configure(userService)

app.httpServer.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))
