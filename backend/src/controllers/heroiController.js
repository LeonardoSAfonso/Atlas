const connection = require('../database/connection')

module.exports = {

    async create(req, res) {

        console.log(req.params)

        const { nome, nivel, int, des, sab, car, forc, con, ca, hp,campanha, classe, idClasse, raca, idRaca, alinhamento} = req.body
        const hpMaxima = hp

        const heroi = await connection('Herois').insert({
            nome,
            nivel,
            alinhamento,
            int,
            des,
            sab,
            car,
            forc,
            con,
            ca,
            hpMaxima,
            hp,
            classe,
            idClasse,
            raca,
            idRaca,
            campanha
        })

        console.log(heroi)
        return res.json(heroi.codHeroi)
    },

    async index(req, res) {

        const campanha = req.params.campanha

        const herois = await connection('Herois').select('*').where({ campanha: campanha })

        return res.json(herois)
    },

    async updateHP(req, res){
        const {alteracao, id} = req.body

        const heroi = await connection.raw(`update Herois set hp = hp+${alteracao} where codHeroi = ${id}`)

        return res.json(heroi)
    },

    async updateNivel(req, res){
        const {atributoUm, atributoDois, id} = req.body

        const {hpLevelUp} = await connection('Herois').join('Classes', 'Classes.codClasse', '=', 'idClasse' )
        .select('Classes.hpLevelUp').where({codHeroi: id}).first()

        console.log(hpLevelUp)

        const heroi = await connection.raw(
            `update Herois set ${atributoUm}=${atributoUm}+1, 
            ${atributoDois}=${atributoDois}+1,
            hpMaxima = hpMaxima+${hpLevelUp},
            hp = hp+${hpLevelUp}
            where codHeroi = ${id}`
            )

        return res.json(heroi)
    },

    async delete(req, res) {

        const codHeroi = req.params.id

        await connection('Herois').where('codHeroi', codHeroi).delete()

        return res.status(204).send()
    }
}