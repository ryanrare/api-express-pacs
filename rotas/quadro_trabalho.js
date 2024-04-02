const { Router } = require("express")
const { getQuadroTrabalho } = require("../controlers/quadro_trabalho")
const router = Router()

router.get('/', getQuadroTrabalho)

router.post('/', (req, res) => {
    res.send('insert de um quadro de trabalho de um usuario')
})

router.patch('/', (req, res) => {
    res.send('uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('uma requisição do tipo DELETE')
})

module.exports = router