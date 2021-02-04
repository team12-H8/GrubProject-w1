const axios = require('axios')

class controller {
  static async getData (req, res, next) {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=jakarta,id&APPID=${process.env.WEATHER_APIKEY}`
      const weather = await axios.get(url)
      const final = []
      final.push(weather.data.main)
      final.push(weather.data.weather[0])
      final.push({ city: weather.data.name})
      
      res.status(200).json(final)
    } catch (err) {
      next(err)
    }
  } 
}

module.exports = controller