const { json } = require('express')
const connection = require('../database/connection')

module.exports = {

    async create(req, res){

        const {nome, nivel, alinhamento, int, des, sab, car,
                forc, con, hpMaxima, hp, ca} = req.body

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
            hpMaxima, 
            hp,
            ca
        })

        return res.json(codMob)
    },

    async index(req, res){
        
        const user = req.headers.authorization

        const mobs = await connection('Mobs')
        .select('*')

        return res.json(mobs)
    },

    async delete(req, res){

        const codMonster = req.params.id
        
        console.log(req.params)
        await connection('MobsCampanha').where('codMonster', codMonster).delete()
    
            return res.status(204).send()
    },

    async relaciona(req, res){

        const idCampanha = req.params.campanha

        console.log(req.params)
        const idMob = req.params.id

        const [codMonster] = await connection('MobsCampanha').insert({
            idCampanha,
            idMob
        })

        return res.json(codMonster)
    },

    async relacionados(req, res){

        const campanha = req.params.campanha

        const mobs = await connection('Mobs').innerJoin('MobsCampanha', 'codMob', 'idMob')
        .where('idCampanha', campanha)

        return res.json(mobs)

    }
}