const removeFromArray = function(arr, ...remove) {
    return arr.filter(a => !remove.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
