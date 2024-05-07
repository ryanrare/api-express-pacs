const { Router } = require("express")
const { 
    getQuadroTrabalhos,
    getQuadroTrabalho,
    postQuadroTrabalho,
    patchQuadroTrabalho
} = require("../controlers/quadro_trabalho")

const router = Router()

router.get('/', getQuadroTrabalhos)

router.get('/:id', getQuadroTrabalho)

router.post('/', postQuadroTrabalho)

router.patch('/:id', patchQuadroTrabalho)


router.delete('/', (req, res) => {
    res.send('uma requisição do tipo DELETE')
})

module.exports = router