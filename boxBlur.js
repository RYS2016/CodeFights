function boxBlur(image) {

  var sum = 0;
  var arr = []
  var line = [];
  
  for (var a = 0; a + 3 <= image.length; a++){
    for (var b = 0; b + 3 <= image[0].length; b++){
      sum = 0;
      for (var i = a; i < 3 + a; i++){
        for (var j = b; j< 3 + b; j++){
          sum += image[i][j];
        }
      }
       line.push(Math.floor(sum/9));
    }
    arr[a]=line;
    line=[];
  }
  return arr;
}
   
