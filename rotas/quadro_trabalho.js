const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Get de todos os quadro de trabalho dos usuarios')
})

router.post('/', (req, res) => {
    res.send('insert de um quadro de trabalho de um usuario')
})

module.exports = router