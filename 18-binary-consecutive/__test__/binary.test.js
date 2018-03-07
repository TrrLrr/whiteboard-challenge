'use strict';

const findConsecutive = require('../soulution.js');
require('jest');

let testArr = [1,0,0,1,1,1,1,0,0,1];

describe('Find Consecutive Function', function() {
  describe('with a valid arr', function() {
    it('should return highest consecutive value', function() {
      let res = findConsecutive(testArr);
      expect(res).toEqual(4);
      expect(typeof res).toEqual('number');
    });
  });
});
      
