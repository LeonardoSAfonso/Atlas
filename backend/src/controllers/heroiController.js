const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const campanha = req.params.campanha
        const idClasse = req.params.classe
        const idRaca = req.params.raca

        const {nome, nivel, alinhamento, int, des, sab, car,
                forc, con, hpMaxima, hp} = req.body

        const classe = await connection('Classes').select('nome').where('codClasse', idClasse).first()
        const raca = await connection('Racas').select('nome').where('codraca', idRaca).first()


        const [codHeroi] = await connection('Herois').insert({
            nome,
                nivel, 
            alinhamento, 
            int, 
            des, 
            sab, 
            car,
            forc, 
            con,
            hpMaxima, 
            hp,
            classe,
            idClasse,
            raca,
            idRaca,
            campanha
        })

        return res.json(codHeroi)
    },

    async index(req, res){
        
        const campanha = req.params.campanha

        const herois = await connection('Herois')
        .select('*')
        .where({campanha: campanha})

        return res.json(herois)
    },

    async delete(req, res){

        const codHeroi = req.params.id

        await connection('Herois').where('codHeroi', codHeroi).delete()
    
            return res.status(204).send()
    }
}