'use strict';

const math = require('../solution.js');
require('jest');

describe('Math Module', function() {
    describe('#objMethod', function() {
        it('should return {max:4, second: 3}', function() {
            var result = math([4,3,2,1]);
            expect(result).toEqual({max:4, second:3});
        });
        it('should return {max:9.1, second:8.2', function() {
            var float = math([4.5, 9.1, 3.3, 1.7, 8.2]);
            expect(float).toEqual({max:9.1, second:8.2});
        });
        it('should throw missing array error', function() {
            expect(math).toThrow('Missing array');
        });
        it('should return null', function() {
            var nonNum = math([7, 'breaux', 4, 2]);
            expect(nonNum).toEqual(null);
        });
        
    });
});
         