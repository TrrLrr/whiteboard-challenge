'use strict';

require('jest');
const findNearest = require('./../solution.js');

let testBST = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 3

    },
    right: {
      value: 7
    }
  },
  right: {
    value: 15,
    left: {
      value: 13
    },
    right: {
      value: 17
    }
  },
}

describe('#FindNearest function', () => {
  describe('With a valid argument', () => {
    it('should return value of nearest node', () => {
      expect(findNearest(testBST, 9)).toEqual(10);
    })
  })
})