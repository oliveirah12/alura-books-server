const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favoritos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/', rotaLivro)
app.use('/favoritos/', rotaFavorito)

const port = 8000


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
} )