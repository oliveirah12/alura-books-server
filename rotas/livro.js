const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Opa, bão eaí?')
})


module.exports = router