'use strict';

const isPalindrome = require('../solution.js');
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
          val: 3, 
          next: {
            val: 2, 
            next: {
              val:1,
              next: null
            }
          }
        }
      }
    }
  }
}

let listTwo = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

console.log(isPalindrome(list));

describe('Linked List Palindrome Module', function() {
  describe('#isPalindrome function', function() {
    describe('with a valid, true argument', function() {
      it('should return true if linked list is palindrome', function(done) {
        
        expect(isPalindrome(list)).toEqual(true);
        done();
      });
    });
    describe('with a false argument', function() {
      it('should return false', function(done) {
        expect(isPalindrome(listTwo)).toEqual(false);
        done();
      });
    });
  });
});