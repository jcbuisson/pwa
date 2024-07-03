
export default function (app) {
   app.createService('user', app.get('prisma').user)
}
