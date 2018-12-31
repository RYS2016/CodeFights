function longestWord(text){
    
    return text.match(/\w+/g).words.reduce((a,b) => a.length > b.length ? a : b);
}
