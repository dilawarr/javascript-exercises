const convertToCelsius = function(fahrenheit) {
  let result = ((fahrenheit - 32) * (5/9))
  if(!Number.isInteger(result))
    result = Number(result.toFixed(1));
  return result;
};

const convertToFahrenheit = function(celsius) {
  let result = ((celsius * 9/5) + 32);
  if(!Number.isInteger(result))
    result = Number(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
