const axios = require("axios");
const API_KEY = "c8d6a3253f4dd87064d3ee885ce99f71";

const Weather = require("../model/Weather");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  const cityname = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`;

  const weather = new Weather(cityname);
  weather.validate();
  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        let color;
        if (response.data.main.temp >= 0 && response.data.main.temp <= 10) {
          color = "black";
        }
        res.render("index", {
          weather: `It is currently ${response.data.main.temp} in ${cityname}.`,
          feelslike: `Feels like ${response.data.main.feels_like} in ${cityname}.`,
          humidity: `Humidity is ${response.data.main.humidity}.`,
          color: color,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
