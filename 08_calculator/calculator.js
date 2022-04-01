const add = function (a, b) {
   return a + b;
};

const subtract = function (a, b) {
   return a - b;
};

const sum = function (array) {
   return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function (array) {
   return array.reduce((prev, current) => prev * current);
};

const power = function (a, b) {
   return Math.pow(a, b);
};

const factorial = function (n) {
   if (n === 0) return 1;

   let result = 1;
   for (let i = n; i > 0; i--) {
      result *= i;
   }
   return result;
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial
};
