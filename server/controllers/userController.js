const {User} = require('../models')
const {comparePassword} = require('../helpers/bycrypt') 
const {generateToken} = require ('../helpers/jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')

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
    static async googleLogin (req, res) {
        try {
            let newMail
            let newPass
            const client = new OAuth2Client(process.env.CLIENT_ID) 
            const ticket = await client.verifyIdToken({
                idToken: req.body.googleToken,
                audience: process.env.CLIENT_ID
            })
            const payload = ticket.getPayload()
            newMail = payload.email
            newPass = process.env.GOOGLE_PASS
            const find = await User.findOne({where: { email: newMail }})
            if (!find) {
                const create = await User.create({
                    email: newMail,
                    password: process.env.GOOGLE_PASS
                })
                const acces_token = generateToken(create)
                res.status(201).json({ acces_token })
            } else {
                const payload = {
                    id: find.id,
                    email: find.email
                }
                const acces_token = generateToken(payload)
                res.status(200).json({ acces_token })
            }
        } catch (err) {
            console.log(err)
        }
    }
} 

module.exports = UserController 
