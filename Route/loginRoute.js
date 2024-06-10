
const express = require('express')
const { loginController } = require('../Controller/loginController')
const loginRoute = express.Router()

loginRoute.post('/login',loginController)

module.exports ={loginRoute}