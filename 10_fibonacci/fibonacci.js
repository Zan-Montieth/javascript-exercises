const fibonacci = function (lookupTerm) {
  if (Number(lookupTerm) < 0) {
    return "OOPS";
  }
  let term1 = 1;
  let term2 = 1;
  let outputTerm = 1;
  for (let i = 0; i < Number(lookupTerm); i++) {
    if (i < 2) {
    } else if (i == 2) {
      outputTerm = term1 + term2;
    } else if (i > 2) {
      [term1, term2] = [term2, outputTerm];
      outputTerm = term1 + term2;
    }
  }
  return outputTerm;
};

// fibonacci(3);

// Do not edit below this line
module.exports = fibonacci;
