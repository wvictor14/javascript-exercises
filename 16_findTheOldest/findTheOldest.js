const findTheOldest = function(array) {
  let addedBirthDate = array.map(obj => {

    let age = 0;
    if (!('yearOfDeath' in obj)) {
      let currentYear = new Date().getFullYear();
      age = currentYear - obj.yearOfBirth;
    } else {
      age = obj.yearOfDeath - obj.yearOfBirth;
    }
    return {...obj, age: age}
  })

  // sort
  let sorted = addedBirthDate.sort((a,b) => a.age - b.age)
  sorted.reverse();

  console.log(sorted);
  return sorted[0]

};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
