'use strict';

const higherFunc = require('../solution.js');
require('jest');

let arr = [1,2,3];
let arrTwo = [1,2,3,4,5,6,7,8,9];
let func = function(el) {
  return el + 2;
}
let funcTwo = function(el){
  return el > 4;
};

let funcThree = function(a,b){
  return a + b;
}

describe('Higher Function Module', function() {
  describe('#Map', function() {
    it('should return a new array of mutated vals', () => {
      let res = higherFunc.map(arr, func);
      expect(res).toEqual([3,4,5]);
      expect(typeof res).toEqual('object');
    });
  });
  describe('#filter', function() {
    it('should return a filtered array', () => {
      let res = higherFunc.filter(arrTwo, funcTwo);
      expect(res).toEqual([5,6,7,8,9]);
      expect(typeof res).toEqual('object');
    });
  }); 
  describe('#reduce', function() {
    it('should reduce the input array', () => {
      let res = higherFunc.reduce(arr, funcThree, 0);
      expect(res).toEqual(6);
      expect(typeof res).toEqual('number');
    });
  });
});