const express = require('express');
const usermodel = require('../models').users;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const login = app.post('/login', async(req, res) => {
    const audience = req.header('x-audience');

    const email = req.body.email;
    const password = req.body.password;

    const user = await usermodel.findOne({
        where: {
            email,
        }
    });

    if (!user) {
        res.status(401);
        res.send({
            error: 'email password salah'
        });

        return;
    }

    if (user.password != password) {
        res.status(401);
        res.send({
            error: 'password salah'
        });

        return;
    }

    const token = jwt.sign({
        sub: user.id,
        iss: 'skilvul',
        aud: audience,
        exp: parseInt(((new Date()).getTime() / 1000) + 5 * 60 * 60),
    }, process.env.TOKEN_SECRET);

    res.send({
        token: token
    });
});

module.exports = {login};