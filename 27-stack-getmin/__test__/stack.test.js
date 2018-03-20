'use strict';


const Stack = require('../stack.js');
require('jest');


let testStack = new Stack();


testStack.push(1);
testStack.push(2);
testStack.push(-4);
testStack.push(3);
testStack.push(4);
testStack.push(5);

let testStackTwo = new Stack();

testStackTwo.push(1);
testStackTwo.push(2);
testStackTwo.push(3);
testStackTwo.push(4);
testStackTwo.push(5);



describe('Stack Module', function() {
  beforeAll( () => this.stack = new Stack());

  describe('#Push method', () => {
    it('should push a node to the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
    });
    it('should push another node to the stack', () => {
      this.stack.push(2);
      expect(this.stack.top.val).toEqual(2);
    });
  });
  describe('#Pop method', () => {
    it('should return and delete the top node', () => {
      expect(this.stack.pop()).toEqual(2);
    })
  })
  describe('#peek method', () => {
    it('should peek at top node', () => {
      expect(this.stack.peek()).toEqual(1);
    });
  });
  describe('#getMin method', function() {
    it('should return the lowest val in the stack', function() {
      expect(testStack.getMin()).toEqual(-4);
      expect(testStackTwo.getMin()).toEqual(1);
    });
  });
});
