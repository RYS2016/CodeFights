function stringsRearrangement(inputArray) {
    
  var a = function(depth, inputArray) {
    var b = function(i, j) {
      temp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = temp;
    };
    if (depth === inputArray.length) {
      var nice = true;
      for (var i = 0; i < inputArray.length - 1; i++) {
        var diff = 0;
        for (var j = 0; j < inputArray[i].length; j++) {
          if (inputArray[i][j] !== inputArray[i + 1][j]) {
            diff++;
          }
        }
        if (diff !== 1) {
          nice = false;
        }
      }
      if (nice) {
        return true;
      }
      return false;
    }
    for (var i = depth; i < inputArray.length; i++) {
      b(depth, i);
      if (a(depth + 1, inputArray)) {
        return true;
      }
      b(depth, i);
    }
    return false;
  };
  if (a(0, inputArray)) {
    return true;
  }
  return false;
} 
