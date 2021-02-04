const router = require('express').Router()
const userRouter = require('./userRouter')
const songRouter = require('./songRouter')

router.use('/song', songRouter)
router.use('/user',userRouter)

module.exports = router