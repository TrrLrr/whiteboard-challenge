'use strict';

someFunction = function(arr) {
    let highVal = arr.sort()[arr.length-1];
    let lowVal = arr.sort()[0];
    let avg;
   

    let sum = arr.reduce(function(a,b){
        return a+b;
    })

    avg = sum/arr.length;

    return { highValue: highVal, lowValue: lowVal, average: avg};
}