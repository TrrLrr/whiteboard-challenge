'use strict';

module.exports = function(arr) {
  let count = 0;
  let high = 0;

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0) {
      count = 0;
    }

    if(arr[i] === 1){
      count++;
      if(count > high){
        high = count;
      }
    }
  }
  return high;
}
