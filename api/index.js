const express = require('express')
const router = require('./routes')
const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://admin:keshav2004@mern-bct.5h6lgpe.mongodb.net/?retryWrites=true&w=majority&appName=MERN-BCT"

//const mongoUrl = "mongodb://localhost:27017/mern-bct"

const app = express()

app.use(express.json())     // json support enable
app.use(express.urlencoded())   // enable urlencoded

app.use(router)

//app.use((req, res, next) => {})     // normal middleware

app.use((error, req, res, next) => {    // error handling middleware
    res.status(error.status || 400). send({     // default error handling is 400
        message: error.message || 'Problem while processing request!',   // default error message
        validation: error.validation,
    })
})

app.listen(5000, async () => {    // server run and port address is given
    console.log('Server started at http://localhost:5000')
    console.log('Press Ctrl+C to stop...')

    await mongoose.connect(mongoUrl)
    console.log("MongoDB connected..")

})    