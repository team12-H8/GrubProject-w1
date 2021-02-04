const router = require('express').Router()
const songRouter = require('./songRouter')

router.use('/song', songRouter)

module.exports = router