const {Router} = require('express')
const RegisterCtrl = require('../controllers/auth/register.controller.js')      // RegisterCtrl is renamed of RegisterController
const LoginCtrl = require('../controllers/auth/login.controller.js')

const router = Router()

router.post('/register', RegisterCtrl.register)     //routes/index.js maa /auth put garesakeu

router.post('/login', LoginCtrl.login)

module.exports = router