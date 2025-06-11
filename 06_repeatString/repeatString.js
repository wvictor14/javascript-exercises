const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }

    let out = '';
    for (i = 0; i < times; i++){
        out = out + word;
    }
    return(out)

};

// Do not edit below this line
module.exports = repeatString;
