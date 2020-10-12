const connection = require('../database/connection')

module.exports = {

    async index(req, res){

        const users = await connection('Users').select('*')
        

        return res.json(users)
    },

    async getByEmail(req, res){

        const user = await connection('Users').select('codUser')
            .where({email:req.body.email})
        
            
        return res.json(user)
    },

    async create (req, res){

        const{nome, email} = req.body

        const [codUser] = await connection('Users').insert({
            nome,
            email
        })   


        
        /*const user = await connection('Users')
            .where({email:req.body.email})
            .first()
        */
        console.log(codUser)

        return res.json(codUser)

    },

    async delete (req, res){

        const codUser = req.params.id

        await connection('Users').where('codUser', codUser).delete()
    
        return res.status(204).send()
    }
}