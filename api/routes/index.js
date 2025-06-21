const {Router} = require('express')
const authRoutes = require('./auth.routes.js')      // imported from auth.routes.js
const profileRoutes = require('./profile.routes.js')
const authorsRoutes = require('./auth.routes.js')
const {auth, adminOnly} = require('../library/middleware.js')


const router = Router()

/*router.get('/', (req, res, next) => {   // next middleware and error next
    res.send({
        QueryString: req.query  // conversion express le handle garchha manually garnu pardaina
    })
})

router.get('/product/:num/details', (req, res, next) => {
    res.send({
        params: req.params,
        body: req.body
    })
})*/

router.use("/auth", authRoutes)

router.use("/profile", profileRoutes)

router.use("/cms/authors", auth, adminOnly, authorsRoutes)

module.exports = router