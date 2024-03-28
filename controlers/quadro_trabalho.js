const fs = require("fs")


function getQuadroTrabalho(req, res) {
    try {
        const livros = JSON.parse(fs.readFileSync("quadro_trabalho.json"))

        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getQuadroTrabalho
}