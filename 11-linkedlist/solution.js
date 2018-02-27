'use strict';

module.exports = function(ll, n) {
  let current = ll;
  let lastN = [];

  while(current !== null) {
    if(lastN.length < n) {
      lastN.push(current);

    }

    if(lastN.length === n) {
      lastN.shift();
      lastN.push(current);
    }
    current = current.next;
  }
  console.log(lastN);
  console.log(lastN[0]);
  return lastN[0];
}




