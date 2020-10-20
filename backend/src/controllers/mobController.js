const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const user = req.headers.authorization
        const classe = req.params.classe
        const raca = req.params.raca

        const {nome, nivel, alinhamento, int, des, sab, car,
                forc, con, manaMaxima, mana, hpMaximo, hp} = req.body

        const [codMob] = await connection('Mobs').insert({
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

        return res.json(codMob)
    },

    async index(req, res){
        
        const user = req.headers.authorization

        const mobs = await connection('Mobs')
        .select('*')
        .where({user: user})

        return res.json(mobs)
    },

    async delete(req, res){

        const codMob = req.params.id
        const user = req.headers.Authorization

        const mob = connection('Mobs')
            .where('codMob', codMob)
            .select('user')
            .first()
            if (mob.user != user) {
                return res.status(401).json({ error: 'Operation not permited.' })
            }
    
            await connection('Mobs').where('codMob', codMob).delete()
    
            return res.status(204).send()
    }
}