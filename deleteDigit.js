function deleteDigit(n) {

    var num = n.toString();   
    
    for (let i = 0; i < num.length; i++){
        if (i === num.length - 1 || num[i] < num[i + 1]){
            let minNum = num.slice(0, i) + num.slice(i + 1);      
            return parseInt(minNum);
        }
    }    
}
