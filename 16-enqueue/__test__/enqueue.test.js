'use strict';

const enqueue = require('../solution.js');
require('jest');

let queue = {
  0: 'one',
  1: 'two',
  2: 'three',
  next: 0,
  length: 3
}


describe('Enqueue', function() {
  describe('with valid arguments', function() {
    it('should add value to queue', function() {
      console.log(queue);
      enqueue(queue, 'four');
      expect(typeof queue).toEqual('object');
      expect(queue.length).toEqual(4);

    });
  });
});


