const { Router } = require("express")
const { getLivros, getLivro } = require("./../controladores/livro")

const router = Router()

router.get('/livros', getLivros)
router.get('/livro/:id', getLivro)

router.post('/', (req, res) => {
    res.send('Aqui foi POST')
})

module.exports = router