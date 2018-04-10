function almostIncreasingSequence(sequence) {
  
    var count=0
    
  for (var i = 1; i < sequence.length; i++) {
    if (sequence[i]<=sequence[i - 1]) {
        count++
          if (count>1) {
            return false
          }
          else if(sequence[i]<=sequence[i - 2] && sequence[i + 1]<=sequence[i - 1]) {
            return false
          }
      }
  }
  return true  
}
