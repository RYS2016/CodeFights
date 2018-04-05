function checkPalindrome(inputString) {
    var splitString = inputString.split("");
    var reverseArr = splitString.reverse();
    var newString = reverseArr.join("");
    
    if (newString === inputString) {
        return true;
    }else{
        return false;
    }
}
