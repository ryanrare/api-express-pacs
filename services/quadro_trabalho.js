const fs = require("fs")

function getTodosQuadroTrabalho() {
    return JSON.parse( fs.readFileSync("quadro_trabalho.json") )
}

function getQuadroTrabalhoByID(id) {
    console.log(id)
    
    const quadro_trabalhos = JSON.parse( fs.readFileSync("quadro_trabalho.json") )
    console.log(quadro_trabalhos)
    const quadroFiltrado = quadro_trabalhos.filter( quadro => quadro.id === parseInt(id) )
    console.log(quadroFiltrado)
    return quadroFiltrado
}

module.exports = {
    getTodosQuadroTrabalho,
    getQuadroTrabalhoByID
}