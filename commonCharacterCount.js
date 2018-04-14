function commonCharacterCount(s1, s2) {
    
    var arr1 = s1.split('');                              //Spliting strings into an arrays of substrings
    var arr2 = s2.split('');
    var count = 0;
    
        for (var i = 0; i < arr1.length; i++){
            if (arr2.indexOf(arr1[i]) >= 0){              //We are searching the array for the specified item
                count++;                                  //if find one increment counter by 1
                arr2.splice(arr2.indexOf(arr1[i]), 1);    //And than remove items from an array
                }
            }
        return count;
}
