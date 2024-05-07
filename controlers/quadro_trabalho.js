const {
    getTodosQuadroTrabalho,
    getQuadroTrabalhoByID,
    insertQuadroTrabalho,
    updateQuadroTrabalho
} = require("../services/quadro_trabalho")


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

function postQuadroTrabalho(req, res) {
    try {
        const QuadroTrabalhoNew = req.body
        insertQuadroTrabalho(QuadroTrabalhoNew)
        res.status(201)
        res.send(QuadroTrabalhoNew)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchQuadroTrabalho(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        updateQuadroTrabalho(body, id)
        res.send("Item modificado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getQuadroTrabalhos,
    getQuadroTrabalho,
    postQuadroTrabalho,
    patchQuadroTrabalho
}