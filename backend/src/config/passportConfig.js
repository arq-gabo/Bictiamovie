const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // no se cencuentra el usuario
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // contrasela erronea
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // autenticación exitosa
                    else
                        return done(null, user);
                });
        })
);