function buildPalindrome(st) {
    
    function isPalindrome(str){

        for(let i = 0; i < str.length/2; i++){
            if(str[i] != str[str.length - i - 1]) return false;
        }
        return true;        
    }
    
    let addPart = "";
    
    for(let char of st){
        if(isPalindrome(st + addPart))break;
        addPart = char + addPart;
    }
    return st + addPart;
}
