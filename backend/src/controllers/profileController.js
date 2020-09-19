const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const codUser = req.headers.authorization

        const atuacao = await connection('AtuacaoCampanhas')
            .where('codUser', codUser)
            .select('*')

        return res.json(atuacao)
    }
}