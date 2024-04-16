const { getTodosQuadroTrabalho, getQuadroTrabalhoByID } = require("../services/quadro_trabalho")


function getQuadroTrabalhos(req, res) {
    try {
        const all_quadro_trabalho = getTodosQuadroTrabalho() 

        res.send(all_quadro_trabalho)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getQuadroTrabalho(req, res) {
    try {
        const id = req.params.id
        const quadro_trabalho = getQuadroTrabalhoByID(id) 
        res.send(quadro_trabalho)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getQuadroTrabalhos,
    getQuadroTrabalho
}