
// DO NOT COMMIT

// pm2 start ecosystem.config.cjs --only pwa

module.exports = {
   apps : [

      // //////////////////////////        PROD      //////////////////////////  
      {
         name: "pwa",
         script: "./src/index.js",
         watch: false,

         env: {
            PORT: "34000",
            LOGS_DIR: "/var/log/pwa",
            DATABASE_URL: "postgresql://chris:eureka31@localhost:5432/pwa",
            vapidPublicKey: "BPZBVrSamWH-zemsmikADlLtoZ-jte7Mi_6pth1hqR3yi2Z00xXqMwyQrmXMHTDHs_SxHw5WAM8R0SWvkSIGcSE",
            vapidPrivateKey: "SmANc36Jhm7qby4D7Hri444lDF0ULjSvJeEGMpNo_As",
         },
      },

   ]
}
