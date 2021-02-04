const express = require('express')
const router = express.Router()
const controller = require('../controllers/coronaController')

router.get('/', controller.getCorona)

module.exports = router