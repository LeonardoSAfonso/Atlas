const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const {page = 1} = req.query 
         
        const [count] = await connection('Campanhas').count()

        const campanhas = await connection('Campanhas')
            .join('AtuacaoCampanhas', 'AtuacaoCampanhas.idCampanha', '=', 'Campanhas.codCampanha')
            .limit(5)
            .offset((page-1)*5)
            .select('Campanhas.nome','Campanhas.descricao', 'Campanhas.codCampanha' , 'AtuacaoCampanhas.funcao')

            res.header('X-Total-Count', count['count(*)'])
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

