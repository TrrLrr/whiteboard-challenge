'use strict';

module.exports = (bst, val) => {
  if(!bst.left && !bst.right){
    throw new Error('please supply binary search tree');
  }
  let res = false
  _traverse(bst);
  function _traverse(node){
    if(node.value === val) {
      res = true;
      return res;
    }
    if(node.left) _traverse(node.left);
    if(node.right)_traverse(node.right);
  }
  return res;
}
   