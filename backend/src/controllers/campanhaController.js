const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const codUser = req.headers.authorization

        const campanhas = await connection('Campanhas')
            .select('Campanhas.nome','Campanhas.descricao', 'Campanhas.codCampanha', 'Campanhas.codUser')
            .where('codUser', codUser)

        return res.json(campanhas)
    },

    async create(req, res){

        const {nome, descricao} = req.body

        const codMestre = req.headers.authorization
        const codUser= req.headers.authorization


        const codCampanha= await connection('Campanhas').insert({
            nome,
            descricao,
            codMestre,
            codUser
        })

        return res.json({codCampanha})
    },

    async delete(req, res){

        const codCampanha = req.params.id
        const codUser = req.headers.Authorization

        const campanha = connection('Campanhas')
            .where('codCampanha', codCampanha)
            .select('codUser')
            .first()
            if (campanha.codUser != codUser) {
                return res.status(401).json({ error: 'Operation not permited.' })
            }
    
            await connection('Campanhas').where('codCampanha', codCampanha).delete()
    
            return res.status(204).send()
    }
}

