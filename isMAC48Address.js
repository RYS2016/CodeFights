function isMAC48Address(inputString) {
    
    if (inputString.length != 17)  return false;
    var count = 0;
    for (var i = 0; i < inputString.length; i++){
        if(inputString[i] == "-"){
            count++
        }
    }
    if (count != 5) return false;
    
    var match = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "-"];
    var arr = inputString.split("");
    
    for (var k = 0; k < arr.length; k++){
            var n = match.includes(arr[k]);
            console.log(arr[k])
            if(n != true) return false;        
    }
    return true;
}
