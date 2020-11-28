const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, descricao, nivel, escola} = req.body

        const [codMagia] = await connection('Magias').insert({
            nome,
            descricao, 
            nivel,
            escola
        })

        return res.json(codMagia)
    },

    async relacionar(req, res){

        const {idMagia, idClasse, classeDesc} = req.body

        const [codRelacao] = await connection('RelacaoMagias').insert({
            idMagia,
            idClasse,
            classeDesc
        })

        return res.json(codRelacao)
    },

    async index(req, res){

        const magias = await connection('Magias').select('*')
    

        return res.json(magias)
    },

    async relacionados(req, res){

        const idClasse = parseInt(req.params.id)
        const nivel = parseInt(req.params.nivel) + 1

        console.log(nivel)

        const magias = await connection('Magias').innerJoin('RelacaoMagias','codMagia', 'IdMagia')
        .where('idClasse', idClasse).andWhere('nivel', '<', nivel)
    

        return res.json(magias)
    },

    async delete(req, res){

        const codMagia = req.params.id

        await connection('Magias').where('codMagia', codMagia).delete()
    
            return res.status(204).send()
    }
}