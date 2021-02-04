require('dotenv').config({path: './.env'})

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(router)

app.listen(port, () => {
  console.log(`connect on http://localhost${port}`)
})