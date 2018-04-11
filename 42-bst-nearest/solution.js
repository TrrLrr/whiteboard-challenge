'use strict';

module.exports = (bst, nearest) => {
  let res = bst.value;
  let lowDiff = Math.abs(nearest - bst.value);
  let curDiff;
  const _traverse = node => {
    if(!node) return;
    curDiff = Math.abs(nearest - node.value);
    if(curDiff === lowDiff && node.value > res){
      res = node.value;
    }
    if(curDiff < lowDiff){
      lowDiff = curDiff;
      res = node.value;
    }
    _traverse(node.left);
    _traverse(node.right);
  }
  _traverse(bst);
  return res;
}
  

