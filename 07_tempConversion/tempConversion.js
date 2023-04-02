const convertToCelsius = function (tempIn) {
  return Math.round((((tempIn - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (tempIn) {
  return Math.round((tempIn * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
