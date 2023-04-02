const leapYears = function(yearIn) {
    if(yearIn % 4 == 0){
        if(yearIn % 100 == 0){
            if(yearIn % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
