const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, descricao, nivel, escola} = req.body

        const [codMagia] = await connection('Herois').insert({
            nome,
            descricao, 
            nivel,
            escola
        })

        return res.json(codRaca)
    },

    async index(req, res){

        const magias = await connection('Magias').select('*')
    

        return res.json(magias)
    },

    async relacionados(req, res){

        const idClasse = req.params.id
        const nivel = req.params.nivel + 1

        await connection('Magias').innerjoin('RelacaoMagias','codMagia', 'IdMagia')
        .where('idClasse', idClasse).andWhere('nivel', '<', nivel)
    

        return res.json(magias)
    },

    async delete(req, res){

        const codMagia = req.params.id

        await connection('Magias').where('codMagia', codMagia).delete()
    
            return res.status(204).send()
    }
}