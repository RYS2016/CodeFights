function alternatingSums(a) {
    
    var sum1 = 0;
    var sum2 = 0;
    var arr = [];
    
    for (var i = 0; i < a.length; i+=2){
        sum1 += a[i];
    }
    arr.push(sum1);
    
    for (var k = 1; k < a.length; k+=2){
        sum2 += a[k];
    }
    arr.push(sum2);
    
    return arr;
}
