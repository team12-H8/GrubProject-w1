module.exports = (err, req, res, next) => {
  // console.log(err.name, '<<<<<<< dari error handler')
  let message = []
  if (err.name == "SequelizeValidationError") {
    const errors = err.errors.map((el) => el.message)
    res.status(400).json({ message: errors})

  } else if (err.name == "SequelizeUniqueConstraintError") {
    const errors = err.errors.map((el) => el.message)
    res.status(400).json({ message: errors})
  
  } else if (err.name == "SequelizeDatabaseError") {
    const msg = 'Email is required'
    message.push(msg)
    res.status(400).json({message})
  
  } else if (err.name == "LoginError") {
    const msg = 'Email or password is wrong'
    message.push(msg)
    res.status(400).json({message})
    
  } else if (err.name == "authenticate") {
    const msg = 'Please Login'
    message.push(msg)
    res.status(400).json({message})

  } else if (err.name == "JsonWebTokenError") {
    const msg = 'Please Login'
    message.push(msg)
    res.status(400).json({message})

  } else if (err.name == "NotFound") {
    const msg = "We're sorry, song not found"
    message.push(msg)
    res.status(400).json({message})
  
  } else {
    const msg = "Unhandle error, we're sorry"
    message.push(msg)
    res.status(500).json({message})
  }
}