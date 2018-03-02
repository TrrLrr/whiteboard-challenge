'use strict';

module.exports = function(ll, n){
  if(!n) return new Error('bad request'); 

  let cur = ll;
  let prev = null;

  while(cur !== null) {
    if(cur.val === n) {
      prev.next = cur.next;
      return ll;
    }
    prev = cur;
    cur = cur.next;
  }
}