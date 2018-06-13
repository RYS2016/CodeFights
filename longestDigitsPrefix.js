function longestDigitsPrefix(inputString) {
    
    var newArr = inputString.split("");
    var prefix = [];
    
    for(var i = 0; i < newArr.length; i++){        
   
        if(isNaN(Number(newArr[i])) == true || newArr[i] == " "){
            break;
        }
		prefix.push(newArr[i])         
    }   
    return prefix.join('');
}
