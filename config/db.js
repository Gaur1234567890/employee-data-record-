const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/`).then(d=>{
    console.log('connected to database')
}).catch(e=>{
    console.log('error to connect database',e)
})

module.exports = {mongoose}