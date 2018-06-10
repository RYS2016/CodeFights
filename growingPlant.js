function growingPlant(upSpeed, downSpeed, desiredHeight) {
    
let target = 0;
let count = 0;

   while (target < desiredHeight){
          target += upSpeed;
          count++;
      
        if(target < desiredHeight){
           target -= downSpeed;
           }
   }
   return count;
}
