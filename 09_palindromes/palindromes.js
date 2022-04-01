const palindromes = function (str) {
   const strF = str.replaceAll(/[.,!\s]/g, '').toLowerCase();
   let strB = '';
   for (let i = strF.length - 1; i >= 0; i--) {
      strB += strF[i];
   }
   return (strF === strB);
};

// Do not edit below this line
module.exports = palindromes;
