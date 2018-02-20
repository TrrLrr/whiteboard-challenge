'use strict';

function missing(arr) {
  let res = 0;
  for(var i = 1; i <= 100; i++) {
    if(!arr.includes(i)){
      
      res = i;
    }
  }
  console.log(res);
  return res;
}

var test = [];

for(var i =1; i < 100; i++) {
  test.push(i);
}

missing(test);