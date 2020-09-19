const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const users = await connection('Users').select('*')

        return res.json(users)
    },

    async create (req, res){

        const{nome, email} = req.body

        const [codUser] = await connection('Users').insert({
            nome,
            email
        })   

        return res.json({codUser})

    }
}