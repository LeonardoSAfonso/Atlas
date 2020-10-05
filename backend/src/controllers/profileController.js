const connection = require('../database/connection')

module.exports = {

    async session(req, res){
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Informe usuário e senha.')
        }
        const user = await connection('Users')
            .where({email:req.body.email})
            .first()
        if(!user) return res.status(400).send('Usuário não encontrado')

        return res.json(user)
    },

    async index(req, res){

        const codUser = req.headers.authorization

        const atuacao = await connection('AtuacaoCampanhas')
            .where('idUser', codUser)
            .select('*')

        return res.json(atuacao)
    }
}