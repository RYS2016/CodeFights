function isIPv4Address(inputString) {
    
  var blocks = inputString.split(".");
  var arr = inputString.match(/[a-z]/g)

   if(blocks.length === 4 && arr == null) {
    return blocks.every(function(block) {
      return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
    });
  }
  return false; 
}
