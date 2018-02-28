'use strict';

function reverseList(ll) {
  let cur = ll;
  let next = null;
  let prev = null;

  while(cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  


  console.log(JSON.stringify(prev, null, 2));
  return prev;
  
}

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val:5, 
          next: null

          
        }
      }
    }
  }
}

reverseList(list);