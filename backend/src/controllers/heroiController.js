const connection = require('../database/connection')

module.exports = {

    async create(req, res) {

        console.log(req.params)

        const campanha = req.params.campanha
        const classe = req.params.classe
        const idClasse = req.params.idClasse
        const raca = req.params.classe
        const idRaca = req.params.idRaca
        const alinhamento = req.params.alinhamento

        const { nome, nivel, int, des, sab, car, forc, con, hp } = req.body
        const hpMaxima = hp

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

    async index(req, res) {

        const campanha = req.params.campanha

        const herois = await connection('Herois').join('Classes', 'Classes.codClasse', '=', 'idClasse')
            .select('Classes.ca', 'Herois.*')
            .where({ campanha: campanha })

        return res.json(herois)
    },

    async delete(req, res) {

        const codHeroi = req.params.id

        await connection('Herois').where('codHeroi', codHeroi).delete()

        return res.status(204).send()
    }
}