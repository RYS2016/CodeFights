function isBeautifulString(inputString) {
    
    function count(char){
        let occurrences = 0;
        
        for(let letter of inputString){
            if(letter == char) occurrences++;
        }
        return occurrences;
    }
    
    let limit = inputString.length;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for(let char of alphabet){
        let charCount = count(char);
        if(charCount > limit) return false;
        limit = charCount; 
    }
    return true;
}
