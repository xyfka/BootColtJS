function printReverse(tab){
    // *********************
    // var oldTab = [];
    // oldTab = tab;
    // oldTab.reverse();
    // for(var i = 0; i < oldTab.length ; i++){
    // console.log(oldTab[i]);
    // **********************
    
    for(var i = tab.length -1; i>= 0; i--){
        console.log(tab[i]);
    }
}


function isUniform(tab){
    // ***************************
    // var xArray = tab;  
    // for(var i = 1; i < xArray.length; i++){
    //     if(xArray[i] !== xArray[i-1]){
    //         return false;
    //     } else return true;
    // }
    // **************************

    var first = tab[0];
    for(var i = 1; i < tab.length; i++){
        if(tab[i] !== first){
            return false;
        }
    } return true;
}


function sumArray(tab){
    var sum = null;
    // for(var i = 0; i < tab.length; i++){
    //     sum = sum + tab[i];
    // }
    tab.forEach(function(element){
        sum += element;
    });
    return sum;
}

function max(tab){
    var max = tab[0];
    tab.forEach(function(number){
        if(max < number){
            max = number;}
    });
    return max;
}