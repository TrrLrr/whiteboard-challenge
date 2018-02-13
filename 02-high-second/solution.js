'use strict';

 module.exports = function(arr) {
    if(!arr) throw new Error('Missing array');
    
    for(var i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) !== 'number') {
            return null;
        }
    }
    return {
        max: arr.sort()[arr.length-1],
        second: arr.sort()[arr.length-2]

    }
}

