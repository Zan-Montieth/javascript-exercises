const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayIn) {
  let total = 0;
  while(arrayIn.length > 0) {
    total += arrayIn.shift(0);
  }
  return total;
};

const multiply = function (arrayIn) {
  let total = 1;
  while(arrayIn.length > 0) {
    total = total * arrayIn.shift(0);
  }
  return total;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  let total = 1;
  if ((num1 == 0)) {
    return 1;
  }
  for (i = 1; i <= num1; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
