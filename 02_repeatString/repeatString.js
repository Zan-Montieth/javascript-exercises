const repeatString = function(stingIn, numIn) {
    if(numIn < 0){
        return "ERROR"
    }
    let stringOut = "";
    for(i=0;i<numIn;i++){
        stringOut += stingIn;
    }
    return stringOut
};

// Do not edit below this line
module.exports = repeatString;
