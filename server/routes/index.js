const router = require('express').Router()
const userRouter = require('./userRouter')
const songRouter = require('./songRouter')
const { authenticate } = require('../middleware/auth')

router.use('/user',userRouter)
router.use(authenticate)
router.use('/song', songRouter)

module.exports = router