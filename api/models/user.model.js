//const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')    // schema is imported as class

//const {Schema} = require('mongoose')

const userSchema = new Schema({      // object creation
    name: {type: String, required: true},   // required: true means name can't be empty
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String},
    role: {type: String, required: true, enu: ['Admin', 'Author']}
}, {
    timestamps: true,   // automatically creates created and updated date
    autoIndex: true,
    autoCreate: true,   // creates table without data
})

const User = model('User', userSchema)      // camelCase, PascalCase: used in models, snake_case: collection/table, kebab-case(not commonly used)

module.exports = User

// model is used to access database
