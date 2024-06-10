const express = require('express')
const app = express()

const env = require('dotenv')
const { registerRoute } = require('./Route/registerRoute')
const { loginRoute } = require('./Route/loginRoute')
const { studentRoute } = require('./Route/studentRoute')
env.config()
app.use(express.json())
app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',studentRoute)

let port = process.env.PORT || 10000;
app.listen(port,()=>{
    console.log(`the process is running on port no ${port}`)
})