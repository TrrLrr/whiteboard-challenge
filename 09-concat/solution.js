'use strict';

function concat(arr1, arr2) {
  let res =[];

  for(var i =0; i < arr1.length; i++ ) {
    res.push(arr1[i]);
  }

  for(var i = 0; i < arr2.length; i++){
    res.push(arr2[i]);
  }
  console.log(res.sort(function(a,b) { return a-b}));
  return res.sort(function(a,b) { return a-b});
}

let one = [3,7,1,6];

let two = [22,13, 2, 67];

concat(one, two);