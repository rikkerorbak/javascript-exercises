const removeFromArray = function (array, toRemove) {
   // let newArray;
   for (var i = 0; i < array.length; i++) {
      if (array[i] === toRemove) {
         array.splice(i, 1);
      }
   }
   return array;
};


// Do not edit below this line
module.exports = removeFromArray;
