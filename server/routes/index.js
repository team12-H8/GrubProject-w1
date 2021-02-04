const router = require('express').Router()
const userRouter = require('./userRouter')

router.use('/user',userRouter)
//router.use('/song')

module.exports = router