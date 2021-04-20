// C to F (true) or F to C (false)
// rounded to one decimal place

const temperatureConverter = function(number, boolean) {
  if (typeof(number) !== 'number') {
    return NaN;
  }
  if (boolean === true) {
    const farenheit = (number * (9/5) + 32);
    return farenheit
  }
  if (boolean === false) {
    const celsius = ((5/9) * (number - 32));
    return celsius;
  }
}



console.log(temperatureConverter(89.6, false));
