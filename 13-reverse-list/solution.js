'use strict';

module.exports = function(ll) {
  let cur = ll;
  let next = null;
  let prev = null;

  while(cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  
  return prev;
  
}

  


  



