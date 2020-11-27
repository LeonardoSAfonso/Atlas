const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, descricao, alinhamento, visao, tracos, 
            subRaca, subRacaDesc, subRacaTracos} = req.body

        const [codRaca] = await connection('Racas').insert({
            nome,
            descricao, 
            alinhamento,
            visao, 
            tracos, 
            subRaca, 
            subRacaDesc,
            subRacaTracos
        })

        return res.json(codRaca)
    },

    async index(req, res){

        const racas = await connection('Racas').select('*')
    

        return res.json(racas)
    },

    async delete(req, res){

        const codRaca = req.params.id

        await connection('Racas').where('codRaca', codRaca).delete()
    
            return res.status(204).send()
    }
}