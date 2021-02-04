const { User } = require('../models')
const { verify } = require('../helpers/jsonwebtoken')

async function authenticate (req, res, next) {
  const access_token = req.headers.access_token
  try {
    if (!access_token) {
      next({
        name: 'authenticate'
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
        next({
          msg: 'authenticate'
        })
      }
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { authenticate }