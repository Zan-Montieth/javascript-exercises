const removeFromArray = function(arrayIn) {
    let arrayOut = [];
    for (let i = 1; i < arguments.length; i++) {
        while(arrayIn.length > 0){
            if(arrayIn[0] === arguments[i]){
                arrayIn.shift();
            }else{
                arrayOut.push(arrayIn.shift());
            }
        }
        if(i + 1 < arguments.length){
            arrayIn = arrayOut;
            arrayOut = [];
        }
    }
    return arrayOut
};

// Do not edit below this line
module.exports = removeFromArray;
