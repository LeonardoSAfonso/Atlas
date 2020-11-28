const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nomeHab, descHab, idMob} = req.body

        const [codHabilidade] = await connection('HabilidadesMob').insert({
            nomeHab,
            descHab, 
            idMob
        })

        return res.json(codHabilidade)
    },

    async index(req, res){

        const idMob = parseInt(req.params.id)

        const habilidades = await connection('HabilidadesMob').join('Mobs', 'Mobs.codMob','=', 'idMob')
            .select('codHabilidade', 'nomeHab', 'descHab', 'idMob').where('Mobs.codMob', idMob)
    

        return res.json(habilidades)
    },

    async delete(req, res){

        const codHabilidade = req.params.id

        await connection('HabilidadesMob').where('codHabilidade', codHabilidade).delete()
    
            return res.status(204).send()
    }
}