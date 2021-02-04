const axios = require('axios')

class controller {
  static async getData (req, res) {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=jakarta,id&APPID=${process.env.WEATHER_APIKEY}`
      const weather = await axios.get(url)
      const final = []
      final.push(weather.data.main)
      final.push(weather.data.weather[0])
      final.push({ city: weather.data.name})
      
      res.status(200).json(final)
    } catch (err) {
      res.status(500).json(err, {
        msg: 'Internal Weather error'
      })
    }
  } 
}

module.exports = controller