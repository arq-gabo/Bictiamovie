const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = req.body.role;
    user.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    }); 
}

module.exports.authenticate = (req, res, next) => {
    // llama la funcion de autenticación de passport
    passport.authenticate('local', (err, user, info) => {       
        // error en los middlewer de passpor
        if (err) return res.status(400).json(err);
        // si el usuario esta registrado
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // si no se reconoce la contraseña
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id},
            (err, user) => {
                if(!user){
                    return res.status(404).json({ status: false, message: 'User Record Not Found'});
                } else {
                    return res.status(200).json({ status: true, user: _.pick(user,['_id', 'name', 'lastname', 'email', 'role'])});
                }
            }        
        );
}