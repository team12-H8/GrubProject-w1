const {User} = require('../models')
const {comparePassword} = require('../helpers/bycrypt') 
const {generateToken} = require ('../helpers/jsonwebtoken')

class UserController { 
    static register (req,res,next) { 
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
            res.status(500).json(err.message)
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
                    name : 'LoginError', 
                    status : 400,
                    msg : 'Invalid email or password' 
                })
            } else { 
                const comparedPass = comparePassword(loggedUser.password,data.password) 
                if (comparedPass === false) { 
                    throw ({ 
                        name : 'LoginError', 
                        status : 400,
                        msg : 'Invalid email or password' 
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
            res.send(err)
        })
    }
} 

module.exports = UserController 
