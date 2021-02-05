const { User } = require('../models')
const { verify } = require('../helpers/jsonwebtoken')

async function authenticate (req, res, next) {
  const accessToken = req.headers.accesstoken
 
  try {
    if (!accessToken) {
      next({
        name: 'authenticate'  
      })
    } else {
      const email = verify(accessToken).email
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