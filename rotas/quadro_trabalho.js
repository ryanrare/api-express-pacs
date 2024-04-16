const { Router } = require("express")
const { getQuadroTrabalhos, getQuadroTrabalho } = require("../controlers/quadro_trabalho")

const router = Router()

// GET
router.get('/', getQuadroTrabalhos)

router.get('/:id', getQuadroTrabalho)

// Demais
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