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

    async delete(req, res) {

        const codHeroi = req.params.id

        await connection('Herois').where('codHeroi', codHeroi).delete()

        return res.status(204).send()
    }
}