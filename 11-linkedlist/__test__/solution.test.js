'use strict';

const findN = require('../solution.js');
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
          val: 5, 
          next: {
            val: 6, 
            next: {
              val:7,
              next: null
            }
          }
        }
      }
    }
  }
}



describe('FindN Module', function() {
  describe('#findN function', function() {
    it('should return the Nth node from end of list', function() {
      expect(findN(list, 3)).toEqual({ val: 5, next: { val: 6, next: { val: 7, next: null } } });
      
    });
  });
});
