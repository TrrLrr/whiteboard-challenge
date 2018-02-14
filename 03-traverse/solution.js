function traverse(obj) {
    let arr =[];
    let nextCar = obj;
    console.log(obj.next);

    while(nextCar.next) {
        arr.push(nextCar.value);
        nextCar = nextCar.next;
    }
        
    return arr.reduce((a,b) => a+b);
        
}