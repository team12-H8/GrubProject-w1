const { User } = require('../models')

async function authenticate (req, res, next) {
  const access_token = req.headers.access_token
  try {
    if (!access_token) {
      res.status(400).json({
        msg: 'Please login'
      })
    } else {
      const email = verify(access_token).email
      const find = await User.findOne({ where: { email }})
      if (find) {
        req.user = {
          id: find.id,
          email: find.email
        }
        next()
      } else {
        res.status(400).json({
          msg: 'Please login'
        })
      }
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { authenticate }