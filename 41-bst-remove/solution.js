'use strict';

function postOrderRemove(node){
  _traverse(node);
  function _traverse(n){
    let parent = n;
    if(n.left) _traverse(n.left);
  
    let replace = n.value;
    if(n.right){ 
      parent.right = n.right;
    } else {
      n = null;
    }
    console.log(':::replace:::', replace);
    return replace;
  }
} 
    

function removeNode(bst, val) {
  let q = [bst];
  let current = bst;
  let parent;
  while(q.length > 0) {
    
    current = q.pop();
    if(current.value === val){
      if(!current.right && !current.left){
        console.log('first case');
        console.log('first case ::: parent node', parent);
        if(parent.right === current) {
          console.log('first case ::: right child');
          parent.right = null;
        }
        if(parent.left === current) {
          console.log('first case ::: left child');
          parent.left = null;
        }
      }

      if(!current.right && current.left) {
        if(parent.right === current) parent.right = current.left;
        if(parent.left === current) parent.left = curent. left;
      }

      if(!current.left && current.right) {
        if(parent.right === current) parent.right = current.right;
        if(parent.left === current) parent.left = current.right;
      }

      if(current.left && current.right) {
        console.log('third case');
        console.log('third case ::: parent node', JSON.stringify(parent, null, 2));
        if(parent.right === current){
          console.log('Third case ::: right child');
          parent.right.value = postOrderRemove(current.right);
        }
        if(parent.left === current) {
          console.log('Third case ::: left child');
          parent.left.value = postOrderRemove(current.right);
        }
      }
    };
    if(current.left) {
      parent = current;
       q.unshift(current.left);
    }
    if(current.right) {
      parent = current;
      q.unshift(current.right);
    }
  }
  console.log(JSON.stringify(bst, null, 2));
  return bst;
}

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

removeNode(testBST, 5);