const convertToCelsius = function(far) {
  let cel =  (far - 32) * 5/9
  if (!cel.toString().includes('.')) return cel

  let afterDec = cel.toString().split('.')[1];
  if (afterDec.length === 1) return cel

  let firstDec = Number(afterDec.charAt(0));
  let secDec = Number(afterDec.charAt(1));
  
  let roundedFirstDec = firstDec;
  if (firstDec >= 5) {
    roundedFirstDec = secDec + 1;
  } else {
    roundedFirstDec = secDec;
  }

  return Math.floor(cel) + roundedFirstDec/10 ;
};
 console.log(convertToCelsius(100));

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
