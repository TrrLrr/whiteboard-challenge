'use strict';

module.exports = (bst) => {
  let res= [];
  _traverse(bst);
  function _traverse(node){
    res.push(node.value);
    if(node.left){_traverse(node.left)}
    if(node.right){_traverse(node.right)}
  }
  return res;
}

