const palindromes = function (arrayIn) {
  return (
    arrayIn.split("").filter(isSpace).toString().toLowerCase() ==
    arrayIn.split("").filter(isSpace).reverse().toString().toLowerCase()
  );
};

function isSpace(charIn) {
  return charIn.toUpperCase() != charIn.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
