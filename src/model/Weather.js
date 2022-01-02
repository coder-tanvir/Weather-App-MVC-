const Weather = function (data) {
  this.data = data;
  this.errors = [];
};

Weather.prototype.validate = function () {
  if (this.data == "") {
    this.errors.push("Please enter the name of the City");
  }
};

module.exports = Weather;
