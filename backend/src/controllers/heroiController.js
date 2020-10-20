const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const user = req.headers.authorization
        const classe = req.params.classe
        const raca = req.params.raca

        const {nome, nivel, alinhamento, int, des, sab, car,
                forc, con, manaMaxima, mana, hpMaximo, hp} = req.body

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
            manaMaxima, 
            mana, 
            hpMaximo, 
            hp, 
            classe, 
            raca,
            user
        })

        return res.json(codHeroi)
    },

    async index(req, res){
        
        const user = req.headers.authorization

        const herois = await connection('Herois')
        .select('*')
        .where({user: user})

        return res.json(herois)
    },

    async delete(req, res){

        const codHeroi = req.params.id
        const user = req.headers.Authorization

        const heroi = connection('Herois')
            .where('codHeroi', codHeroi)
            .select('user')
            .first()
            if (heroi.user != user) {
                return res.status(401).json({ error: 'Operation not permited.' })
            }
    
            await connection('Herois').where('codHeroi', codHeroi).delete()
    
            return res.status(204).send()
    }
}