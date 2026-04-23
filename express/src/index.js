const express = require("express")
const { users } = require("./data")
const logger = require("./middleware/logger")

const app = express()
const PORT = 3000

app.use(logger)
app.use( express.json() )

//Crear una ruta básica (endpoint) en la raíz que corresponde al home
app.get( "/users", (req, res) => {
  res.json(users)
} )

app.listen( PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
} )