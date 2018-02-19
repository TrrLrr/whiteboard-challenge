'use strict';

let test = [4, 3, 2, 7, 8, 2, 3];

function dissappears(arr) {
    var maxNum = Math.max.apply(null, arr);
    var sequence = [];
    var result = [];
    
    for(var i = 1; i <= maxNum; i++) {
        sequence.push(i);
    }
    console.log(sequence);

    for(var i = 0; i < sequence.length; i++) {
        if(!arr.includes(sequence[i])) {
            result.push(sequence[i]);
        }
    }
    console.log(result);
    return result;
}

dissappears(test);