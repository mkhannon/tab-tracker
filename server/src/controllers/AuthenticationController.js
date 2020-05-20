const {User} = require('../models')

module.exports = {
    async register (_req,res) {
        try {
            const user = await User.create(_req.body) 
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}