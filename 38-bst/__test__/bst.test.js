require('jest');
const bstTraverse = require('./../solution.js');


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
  it('should return an array of the values in bst', () => {
    let res = bstTraverse(testBST);
    expect(res).toEqual([10,5,3,7,15,13,17]);
  })
})