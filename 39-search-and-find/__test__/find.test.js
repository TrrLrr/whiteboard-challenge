require('jest');
const traverseAndFind = require('./../solution.js');


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

describe('BST Traversal Method', () => {
  it('should return true if value is found', () => {
    let res = traverseAndFind(testBST,15);
    expect(res).toEqual(true);
  });
  it('should return false if value is not found', () => {
    let res = traverseAndFind(testBST, 14);
    expect(res).toEqual(false);
  });
  it('should throw an error if first arg is not an object', () => {
    function traverseError() {
      traverseAndFind(1,5);
    }
    expect(traverseError).toThrowError('please supply binary search tree');
  });
});