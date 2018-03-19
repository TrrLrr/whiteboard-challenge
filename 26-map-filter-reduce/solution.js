'use strict';

module.exports = exports = {};

exports.map = function(arr, func) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }

  return newArr;  
}

exports.filter = function(arr, func) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

exports.reduce = function(arr, func, startVal) {
  let acc = startVal;

  for(let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }

  return acc;
}