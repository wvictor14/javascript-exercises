const palindromes = function (string) {
  const splitted = string.toLowerCase().replaceAll(' ', '').replaceAll(/[^\w\s]/gi, '').split('');
  
  console.log('forward' + splitted);

  const reverse = splitted.toReversed();
 
  console.log('reverse' + reverse);

  for (let i = 0; i < splitted.length; i++){

   if ( splitted[i].match(/[.,:!?]/) || reverse[i].match(/[.,:!?]/) ) {
    continue
   }


    if (splitted[i] !== reverse[i]) return false
  }

  return true
};

console.log(palindromes('abc'))

// Do not edit below this line
module.exports = palindromes;
