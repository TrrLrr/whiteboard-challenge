'use strict';

module.exports = function(ll) {
  let array = [];
  let reversedArr = [];
  let current = ll;

  while(current !== null){
    array.push(current.val);
    current = current.next
  }

  for(var i = array.length-1; i >= 0; i-- ) {
    reversedArr.push(array[i]);
  }
  
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== reversedArr[i]){
      return false;
    }
  }
  return true;
}

  


