//Manejo de variables de entorno con Node.js
//En package.json
/* "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js",
    "dev": "nodemon --env-file=.env src/app.js"
  }, */

import { config } from 'dotenv'
import express from 'express'
config() 

const app = express()


//Variables de entorno
console.log(process.env.PORT)
console.log(process.env.HELLO)
