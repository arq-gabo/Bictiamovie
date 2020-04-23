const { Router } = require('express');
const router = Router();

const User = require('../models/userModels');

const jwt = require('jsonwebtoken');

router.get('/users', (req, res) => res.send('Hello World'));

//Crear Usuario
router.post('/users/signup', async (req, res) => {
    const { name, lastname, email, password, role } = req.body;
    const newUser = new User({name, lastname, email, password, role}); //crea el usuario y guarda en una constante
    await newUser.save(); //guarda en la base de datos
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey') //crea el token
    res.status(200).json({token}); //devuelve el token al cliente
})

//Login Usuario
router.post('/users/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email}) //busca el correo si se encuentra en la base de datos
    if (!user) return res.status(401).send("The email doesn't exist");
    if (user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
})

module.exports = router;
