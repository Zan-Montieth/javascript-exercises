const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }
  return Array.from({ length: num2 - num1 + 1 }, (_, i) => num1 + i).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

// Do not edit below this line
module.exports = sumAll;
