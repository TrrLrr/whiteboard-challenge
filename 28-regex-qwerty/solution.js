'use strict';

module.exports = function(arr) {
  let res = [];
  let lineOne = /^[qwertyuiop]*$/ig;
  let lineTwo = /^[asdfghjkl]*$/ig;
  let lineThree = /^[zxcvbnm]*$/ig;

  arr.forEach(el => {
    if(lineOne.test(el) || lineTwo.test(el) || lineThree.test(el)){
      res.push(el);
    }
  })

  return res;
}