import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./user.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api", router)

const PORT = process.env.PORT || 3000

app.get("/", (req, res) =>{
  res.send("Hola MongoDB ")
})



mongoose
.connect(process.env.MONGODB_URI)
.then( () => console.log("Conectado con MongoDB Atlas") )
.catch( error => console.log(error) )

app.listen( PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
} )