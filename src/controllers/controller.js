const axios = require("axios");
const API_KEY = "c8d6a3253f4dd87064d3ee885ce99f71";

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  const cityname = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`;

  axios
    .get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
