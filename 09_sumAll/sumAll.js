const sumAll = function(a, b) {
    let out = 0;

    if (!Number.isInteger(a) | !Number.isInteger(b)) return 'ERROR';
    if (a < 0 | b < 0) return 'ERROR';
    if (a === b) {
        return a
    }

    if (a > b) {
        upper = a;
        lower = b;
    } else {
        upper = b;
        lower = a;
    }

    for (i = lower; i <= upper; i++) {
        out += i; 
    }
    return out
};

// Do not edit below this line
module.exports = sumAll;
