const router = require('express').Router()
const userRouter = require('./userRouter')
const songRouter = require('./songRouter')
const weather = require('./weatherRouter')
const coronaRouter = require('./coronaRouter')
const { authenticate } = require('../middleware/auth')

router.use('/user',userRouter)
// router.use(authenticate)
router.use('/song', songRouter)
router.use('/weather', weather)
router.use('/corona', coronaRouter)

module.exports = router