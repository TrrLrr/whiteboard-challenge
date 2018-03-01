'use strict';

const reverseList = require('../solution.js');
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

describe('Linked List Reverse Module', function() {
  describe('#reverseList function', function() {
    describe('with a valid, true argument', function() {
      it('should return reversed link list', function(done) {
        expect(reverseList(list)).toEqual({
          "val": 5,
          "next": {
            "val": 4,
            "next": {
              "val": 3,
              "next": {
                "val": 2,
                "next": {
                  "val": 1,
                  "next": null
                }
              }
            }
          }
        });
        expect(typeof reverseList(list)).toEqual('object');
        done();
      });
    });
  });
});
          

