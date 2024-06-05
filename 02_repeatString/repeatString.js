const repeatString = function(string, timesRepeated) {
    if(timesRepeated < 0)
        return "ERROR";

    let output = ''
    while(timesRepeated > 0) {
        output += string;
        timesRepeated--;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
