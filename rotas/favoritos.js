const { Router } = require("express")
const { getFavoritos, postFavorito, deleteFavorito } = require("./../controladores/favorito")
const router = Router()

router.get('/favoritos', getFavoritos)
router.post('/favoritos/:id', postFavorito)
router.delete('/favoritos/:id', deleteFavorito)

module.exports = router