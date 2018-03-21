'use strict';

const lineTest = require('../solution.js');
require('jest');

let words = [ 'sup', 'dad', 'tree', 'snake', 'pet'];

describe('Regex Word Module', function() {
  describe('#single row method', function() {
    it('should return a new array of words', function() {
      expect(lineTest(words)).toEqual(['dad', 'tree', 'pet']);
    });
  });
});
