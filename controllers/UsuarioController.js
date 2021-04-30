const models = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    add: async (req,res,next) =>{
        console.log('entra a esta');
        console.log(req.body);
        try {
            req.body.password = await bcrypt.hash(req.body.password,10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    login: async (req,res,next) => {
        console.log(req.body);
        try {
            let user = await models.Usuario.findOne({email:req.body.email});
            if (user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if (match){
                    
                    res.status(200).json({user});
                } else{
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else{
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
