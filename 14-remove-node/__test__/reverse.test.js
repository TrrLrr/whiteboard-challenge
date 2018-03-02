'use strict';

const removeNode = require('../solution.js');
require('jest');

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val:5, 
          next: null
        }
      }
    }
  }
}

let result = {
  val: 1,
  next: {
    val:2,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  }
}

let testFunction = removeNode(list, 3);
let testError = removeNode(list);

describe('Linked List Remove Module', function() {
  describe('#removeNode function', function() {
    describe('with a valid argument', function() {
      it('should return linked list with removed node', function(done) {
        expect(testFunction).toEqual(result);
        expect(typeof testFunction).toEqual('object');
        done();
      });
    });
    describe('with an invalid argument', function() {
      it('should return an error', function(done) {
        removeNode(list, function(err){
          expect(err).toBeTruthy();
        })
        done();
      });
    });
  });
});
        
        
          

