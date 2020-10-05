const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const idUser = req.headers.authorization

        const campanhas = await connection('Campanhas')
            .join('AtuacaoCampanhas', 'AtuacaoCampanhas.idCampanha', '=', 'Campanhas.codCampanha')
            .select('Campanhas.nome','Campanhas.descricao', 'Campanhas.codCampanha' , 'AtuacaoCampanhas.funcao')
            .where('codUser', idUser)

        return res.json(campanhas)
    },

    async create(req, res){

        const {nome, descricao} = req.body

        const codMestre = req.headers.authorization
        const codUser= req.headers.authorization
        const idUser = req.headers.authorization

        const funcao = 'Mestre'

        const codCampanha= await connection('Campanhas').insert({
            nome,
            descricao,
            codMestre,
            codUser
        })

        const idCampanha = codCampanha
        
        await connection('AtuacaoCampanhas').insert({
            idCampanha,
            idUser,
            funcao
        })

        return res.json({codCampanha})
    } 
}

