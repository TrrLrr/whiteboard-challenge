'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    let popped = this.top;
    this.top = popped.next;
    popped.next = null;
    this.size--;

    return popped.val;
  }

  peek() {
    return this.top.val;
  }

  getMin() {
    let res = this.top.val;
    let current = this.top;

    while(current !== null) {
      if(current.val < res){
        res = current.val;
      }
      current = current.next;
    }
    return res;
  }

}