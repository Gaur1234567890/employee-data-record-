const express = require('express')
const { studentController, studentUpdate, studentDelete, studentFind } = require('../Controller/studentController')
const { authMiddleware, studentAuth, allAccess, adminauth } = require('../middleware/authMiddleware')
const studentRoute = express.Router()

studentRoute.post('/create',authMiddleware,studentAuth,studentController)
studentRoute.post('/Read/:id',authMiddleware,allAccess,studentFind)
studentRoute.post('/update/:id',authMiddleware,studentAuth,studentUpdate)
studentRoute.post('/Delete/:id',authMiddleware,adminauth,studentDelete)

module.exports={studentRoute}