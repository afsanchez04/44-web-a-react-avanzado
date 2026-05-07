import express from "express"


const router = express.Router()


router.post("/users", (req, res) => {
  res.send("Usuario creado")
})

export default router



//Discord: 
// alvaro.vargas.mail@gmail.com
// afsanchez04 