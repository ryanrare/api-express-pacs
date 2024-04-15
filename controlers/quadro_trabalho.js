function getQuadroTrabalho(req, res) {
    try {
        res.send('lista de quadro de trabalho!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getQuadroTrabalho
}