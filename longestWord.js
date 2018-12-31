function longestWord(text) {

// Let's create function to check if a character is a letter    

    function isLetter(char){
        return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z")
    }    
    
//find all the words in text
    
    let words = [];
    let word = "";
    
    for (let i = 0; i < text.length; i++){
        let char = text[i];
        if(isLetter(char)){
            word += char;
        } else {
            words.push(word);
            word = "";
            while(i < text.lenght - 1 && !isLetter(text[i + 1])){
                i++;
            }
        }
    }
    if (word.length)words.push(word);
    
//find the largest word
    
    let longestWord = "";
    
    for(let word of words){
        if(word.length > longestWord.length) 
            longestWord = word;
    }
    return longestWord;    
}
