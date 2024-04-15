const express = require("express")
const rota_trabalho = require("./rotas/quadro_trabalho")

const app = express()

app.use('/quadro_trabalho', rota_trabalho)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})