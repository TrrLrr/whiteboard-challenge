'use strict';

module.exports = function(ll) {
  let array = [];
  let current = ll;

  while(current !== null){
    array.push(current.val);
    current = current.next
  }
  return array === array.reverse();
}

  


