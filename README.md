
frontend-appli : mini application PWA qui affiche des notifications
frontend : interface qui gère l'installation de la PWA avec une URL et qui pousse des notifications vers la PWA

# Test en dev

Lancer le backend
```
cd backend
npm run dev
```

Lancer le frontend de la PWA :
Tuer d'abord tous les services workers en cours avec les devtools
```
cd frontend-appli
npm run build
cp vite.config.js dist/  # pour avoir le proxy vers le backend
cd dist
npx vite
```

Lancer le frontend de l'installer :
```
cd frontend
npm run dev
```


# Vapid keys

(créées par scripts/creat-vapid-keys.js) :
Public Key: BPZBVrSamWH-zemsmikADlLtoZ-jte7Mi_6pth1hqR3yi2Z00xXqMwyQrmXMHTDHs_SxHw5WAM8R0SWvkSIGcSE
Private Key: SmANc36Jhm7qby4D7Hri444lDF0ULjSvJeEGMpNo_As


# PWA manifest
La doc est incomplète, notamment sur les icones.
Utilisé : https://stackoverflow.com/questions/62373216/vue-pwa-plugin-manifest-doesnt-use-my-config-attributes
Il faut éditer la section 'pwa' de vue.config.js
Lors du build, un fichier `manifest.json` sera généré dans dist/


# PWA, service workers
SW : https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
VueJS cache busting : https://medium.com/js-dojo/vuejs-pwa-cache-busting-8d09edd22a31


# PWA web push
see: https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

- chaque destinataire de notification doit créer une 'subscription', qui représente une adresse d'envoi.
`app.service('notifications).create({userId, subscription})` permet au serveur de mémoriser les subscriptions de chaque utilisateur,
elle est (re)créée à chaque login (car elle est susceptible de changer)
- `app.service('notification').patch(userId, data)` permet au serveur d'envoyer une notification à un client,
en utilisant la subscription qui a été mémorisée pour lui
- la librairie 'web-push' simplifie l'implémentation du protocole; le cryptage s'appuie sur des 'vapid-keys'.
Les mêmes 'vapid-keys' sont utilisées pour le serveur et pour tous les clients.
- la demande d'autorisation d'utiliser les notifications est faite dans `main.js`


# PWA explicit install

see: https://web.dev/customize-install/
