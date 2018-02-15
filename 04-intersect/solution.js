function intersect(arrOne, arrTwo) {
    let result = [];

    for(var i = 0; i < arrOne.length; i++) {
        if(arrTwo.indexOf(arrOne[i]) > -1) {
            result.push(arrOne[i]);
        }
    }
    console.log(result);
    return result;
}

let one = ["mike", "sue", "tom", "kathy", "henry"];
let two = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];

intersect(one,two);
