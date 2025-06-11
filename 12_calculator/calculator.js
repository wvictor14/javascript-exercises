const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
	return array.reduce((prod, current) => prod * current, 1)
};

const power = function(x, y) {
	return x ** y
	
};

const factorial = function(x) {
  let prod = 1;
	for (let i = x; i > 0; i--) {
    prod = prod * i;
  }
  return prod
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
