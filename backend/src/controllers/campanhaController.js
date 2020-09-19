const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const campanhas = await connection('Campanhas').select('*')

        return res.json(campanhas)
    },

    async create(req, res){

        const {nome, descricao} = req.body

        const codMestre = req.headers.authorization
        const codUser = req.headers.authorization

        const [codCampanha] = await connection('Campanhas').insert({
            nome,
            descricao,
            codMestre,
            codUser
        })

        return res.json({codCampanha})
    } 
}

