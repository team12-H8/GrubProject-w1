const axios = require("axios");

class controller {
  static getCorona(req, res, next) {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      params: { name: "indonesia" },
      headers: {
        "x-rapidapi-key": process.env.CORONA_API_KEY,
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        res.status(500).json("Internal server error");
      });
  }
}

module.exports = controller
