const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, desc, idMob} = req.body

        const [codHabilidade] = await connection('Herois').insert({
            nome,
            desc, 
            idMob
        })

        return res.json(codHabilidade)
    },

    async index(req, res){

        
        const habilidades = await connection('Mob').join('HabilidadesMob', 'codMob','=', 'idMob')
            .select('codhabilidade', 'nomeHab', 'descHab')
    

        return res.json(habilidades)
    },

    async delete(req, res){

        const codHabilidade = req.params.id

        await connection('HabilidadesMob').where('codHabilidade', codHabilidade).delete()
    
            return res.status(204).send()
    }
}