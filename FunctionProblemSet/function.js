function isEven(x) {
    var results = false;
    if(x % 2 === 0){
        results = true;
    }
    return results;
}

function factorial(x) {
    if(x === 0){
        return 1;
    }
    var results = x;
    for(var i = x - 1; i >= 1; i--){
        results = results * i;
    }
    return results;
}

function kebabToSnake(str) {
    var regExp = /-/g;
    var results = str.replace(regExp, "_");
    return results;

}