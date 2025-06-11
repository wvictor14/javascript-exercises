const leapYears = function(year) {
    let divideby4 = year % 4 === 0;
    let divideby100 = year % 100 === 0;
    let divideby400 = year % 400 === 0;

    if (
        divideby4 & !divideby100 |
        divideby4 & divideby400
    ) {
        return true;
    } else return false;

};

// Do not edit below this line
module.exports = leapYears;
