const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const nodemailer = require('nodemailer');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {

    //Envio de email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    let sendEmail = req.body.email;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let mailOptions = {
        from: '',
        to: sendEmail,
        subject: 'Welcome to Bictia Movies',
        text: 'This is a registration confirmation email, thanks for registering in Bictia Movie'
    };

    var user = new User();
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = req.body.role;
    user.save((err, doc) => {
        if(!err){      
            res.status(200).json({"token": user.generateJwt()});

            //funcion de envio de email
            transporter.sendMail(mailOptions, function(err, data){
                if (err){
                    console.log('Ocurrio un Error');
                } else {
                    console.log('Email sent...!!!');
                }
            })

        } else {
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