const fs = require("fs")

function getTodosQuadroTrabalho() {
    return JSON.parse( fs.readFileSync("quadro_trabalho.json") )
}

function getQuadroTrabalhoByID(id) {    
    const quadro_trabalhos = JSON.parse( fs.readFileSync("quadro_trabalho.json") )
    const quadroFiltrado = quadro_trabalhos.filter( quadro => quadro.id === parseInt(id) )
    return quadroFiltrado
}

function insertQuadroTrabalho(quadroNovo) {
    const quadro_trabalhos = JSON.parse(fs.readFileSync("quadro_trabalho.json"))

    const novoQuadroTrabalhos = [ ...quadro_trabalhos, quadroNovo ]

    fs.writeFileSync("quadro_trabalho.json", JSON.stringify(novoQuadroTrabalhos))
}

function updateQuadroTrabalho(modificacoes, id) {
    const quadroAtuais = JSON.parse(fs.readFileSync("quadro_trabalho.json"))
    const indiceModificado = quadroAtuais.findIndex(quadro_trabalho => quadro_trabalho.id == id)
    const conteudoMudado = { ...quadroAtuais[indiceModificado], ...modificacoes }

    quadroAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("quadro_trabalho.json", JSON.stringify(quadroAtuais))
}

function deletarQuadroPorId(id) {
    const quadros = JSON.parse(fs.readFileSync("quadro_trabalho.json"))

    const quadrosFiltrados = quadros.filter( livro => livro.id!== id )
    fs.writeFileSync("quadro_trabalho.json", JSON.stringfy(quadrosFiltrados))
}

module.exports = {
    getTodosQuadroTrabalho,
    getQuadroTrabalhoByID,
    insertQuadroTrabalho,
    updateQuadroTrabalho,
    deletarQuadroPorId
}