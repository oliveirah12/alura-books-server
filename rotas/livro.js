const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, DeleteLivro } = require("./../controladores/livro")

const router = Router()

router.get('/livros', getLivros)
router.get('/livro/:id', getLivro)
router.post('/livro', postLivro)
router.patch('/livro/:id', patchLivro)
router.delete('/livro/:id', DeleteLivro)

router.post('/', (req, res) => {
    res.send('Aqui foi POST')
})

module.exports = router