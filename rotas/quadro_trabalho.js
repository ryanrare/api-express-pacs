const { Router } = require("express")
const { 
    getQuadroTrabalhos,
    getQuadroTrabalho,
    postQuadroTrabalho,
    patchQuadroTrabalho,
    deleteQuadroTrabalho
} = require("../controlers/quadro_trabalho")

const router = Router()

router.get('/', getQuadroTrabalhos)

router.get('/:id', getQuadroTrabalho)

router.post('/', postQuadroTrabalho)

router.patch('/:id', patchQuadroTrabalho)


router.delete('/:id', deleteQuadroTrabalho)

module.exports = router