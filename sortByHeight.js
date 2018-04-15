function sortByHeight(a) {
        
    var trees = function (num){
        return num != -1;
    }
    var newArr = a.filter(trees);  
     
    var largest = function (x, y){
        return x - y;    
    }    
    newArr.sort(largest);
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1){
            a[i] = newArr.shift();
        }
    }
    return a;
}
