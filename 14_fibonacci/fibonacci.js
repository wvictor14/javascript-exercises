const fibonacci = function (x) {
  let current = 1;
  let current_minus_1 = 0;

  if (x < 0) return 'OOPS';
  if (x == 0) return current_minus_1;
  if (x == 1) return current;

  for (let i = 1; i < x; i++) {
   let new_current = current + current_minus_1;

   console.log(new_current);
   current_minus_1 = current;
   current = new_current;
  }
  
  return current;
};

console.log("0" == 0);

// Do not edit below this line
module.exports = fibonacci;
