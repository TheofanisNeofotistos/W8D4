function sum(arguemts){
    const length = arguments.length;
    let sum = 0;
    for(let i=0;i<length;i++){
        sum+=arguments[i];
    }
    return sum;
}

