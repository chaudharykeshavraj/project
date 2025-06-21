const bcrypt = require('bcryptjs')
const User = require('../../models/user.model.js')  // importing user to hash password using bcryptjs
const {errorMsg} = require('../../library/functions.js')

class RegisterController {
    register = async (req, res, next) => {
        //res.send("Tested")
        try {
            const {name, email, password, phone, address} = req.body     // body baata sabai data aauchha: name, email....

            const hash = bcrypt.hasSync(password)   // hashing password and default hashing value is 10

            await User.create({name, email, phone, address, password: hash, role: 'Author'})

            res.status(201).send({
                message: 'Registration Successful!'
            })
        } catch(error) {
            //errorMsg(error, next)
            console.log(error)  // current error aafai user lai dinchha

            if ('errors' in error) {
                let validation = {}

                for (let k in error.errors) {
                    validation = {
                        ...validation,
                        [k]: error.errors[k].message
                    }
                }
                next ({
                    message: 'Some data are invalid!',
                    validation,
                    status: 422
                })
            } /*else if {

            }*/

            next({
                message: 'Something went wrong!',
                status: 400,
            })
        }
    }
}

module.exports = new RegisterController     // class ko object export garchha "new" bhayena bhane class export