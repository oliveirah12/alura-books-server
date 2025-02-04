const express = require("express")
const rotaLivro = require("./rotas/livro")

const app = express()
app.use(express.json())

app.use('/', rotaLivro)

const port = 8000


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
} )