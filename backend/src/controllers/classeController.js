const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, hpInicial, hpLevelUp, desc, proeficienciaArmaduras, proeficienciaArmas,
            proeficienciaTestes, habilidadePrincipal, caminhoNome, caminhoDesc} = req.body

        const [codClasse] = await connection('Classes').insert({
            nome,
            hpInicial, 
            hpLevelUp, 
            desc,
            proeficienciaArmaduras, 
            proeficienciaArmas, 
            proeficienciaTestes, 
            habilidadePrincipal,
            caminhoNome,
            caminhoDesc

        })

        return res.json(codClasse)
    },

    async index(req, res){

        const classes = await connection('Classes').select('*')
    

        return res.json(classes)
    },

    async delete(req, res){

        const codClasse = req.params.id

        await connection('Classes').where('codClasse', codClasse).delete()
    
            return res.status(204).send()
    }
}