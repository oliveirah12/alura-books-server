const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, DeleteLivro } = require("./../controladores/livro")

const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', postLivro)
router.patch('/:id', patchLivro)
router.delete('/:id', DeleteLivro)

router.post('/', (req, res) => {
    res.send('Aqui foi POST')
})


module.exports = router