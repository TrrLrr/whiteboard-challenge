'use strict';

function concat(arr1, arr2) {
  let res =[];

  for(var i =0; i < arr1.length; i++ ) {
    res.push(arr1[i]);
  }

  for(var i = 0; i < arr2.length; i++){
    res.push(arr2[i]);
  }
  console.log('res before sort:', res);
  let sortedArr = [];

  
  while(res.length) {
    var low = Math.min.apply(null, res);
    sortedArr.push(low);
    res.splice(res.indexOf(low), 1);
  }
  
  console.log('final result:', sortedArr );
  return sortedArr;
}

let one = [3,7,1,6];

let two = [22,13, 2, 67];

concat(one, two);