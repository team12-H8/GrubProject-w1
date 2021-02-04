const router = require('express').Router()
const userRouter = require('./userRouter')
const songRouter = require('./songRouter')
const weather = require('./weatherRouter')
const coronaRouter = require('./coronaRouter')
const { authenticate } = require('../middleware/auth')
const errorHandler = require('../middleware/errorHandler')

router.use('/user',userRouter)
// router.use(authenticate)
router.use('/song', songRouter)
router.use('/weather', weather)
router.use('/corona', coronaRouter)
router.use(errorHandler)

module.exports = router