const {User} = require('../models')
const {comparePassword} = require('../helpers/bycrypt') 
const {generateToken} = require ('../helpers/jsonwebtoken')
// const {OAuth2Client} = require('google-auth-library')

class UserController { 
    static register ( req, res, next) { 
        const newUser = { 
            email : req.body.email, 
            password : req.body.password 
        }
        User.create(newUser) 
        .then((data) => { 
            const returnedData = { 
                id : data.id,
                email : data.email
            }
            res.status(201).json(returnedData)
        })
        .catch((err) => { 
            next(err)
        })
    } 

    static login (req,res,next) { 
        const {email,password} = req.body 
        const loggedUser = {email,password} 
        User.findOne({ 
            where : { 
                email : loggedUser.email
            }
        }) 
        .then((data) => { 
            if (data === null) { 
                throw ({ 
                    name : 'LoginError'
                })
            } else { 
                const comparedPass = comparePassword(loggedUser.password,data.password) 
                if (comparedPass === false) { 
                    throw ({ 
                        name : 'LoginError'
                    })
                } else { 
                    const accessToken = generateToken({ 
                        id : data.id,
                        email : data.email
                      }) 
                      res.status(200).json({accessToken})
                }
            }
        }) 
        .catch((err) => { 
            next(err)
        })
    } 

    static googleLogin(req,res) { 
        const client = new OAuth2Client(process.env.CLIENT_ID) 
        client.verifyIdToken({
            idToken : req.body.googleToken, 
            audience : process.env.CLIENT_ID
        }) 
        .then((ticket) => { 
            const payload = ticket.getPayload 
            console.log(payload)
        }) 
        .catch((err) => { 
            console.log(err)
        })
    }
} 

module.exports = UserController 
