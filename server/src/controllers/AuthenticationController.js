module.exports = {
    register (_req,res) {
        res.send({
            message: `Hi ${_req.body.email} your user was registered`
        })
            
    }
}