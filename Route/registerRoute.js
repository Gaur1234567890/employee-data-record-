const express = require('express')
const { registerController } = require('../Controller/registerController')
const { body } = require('express-validator')
const registerRoute = express.Router()

registerRoute.use('/register',body('email').isEmail(),body('password').isLength({min:8}),registerController)
registerRoute.post('/register',registerController)

module.exports = {registerRoute}