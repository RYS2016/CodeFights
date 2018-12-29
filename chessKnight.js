function chessKnight(cell) {

    let chessBoard = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8
    };
    
    const knightX = chessBoard[cell[0]];
    const knightY = parseInt(cell[1]);
    
    var sum = 0;
    
    if(0 < knightX - 2 && knightX - 2 < 9){
         if (0 < knightY - 1 && knightY - 1< 9){
            sum++;            
         } 
         if (0 < knightY + 1 && knightY + 1 < 9){
            sum++;            
         }            
    }
   
    if(0 < knightX + 2 && knightX + 2 < 9){
         if (0 < knightY - 1 && knightY - 1 < 9){
            sum++;           
         } 
         if (0 < knightY + 1 && knightY + 1 < 9){
            sum++;           
         }            
    }

    if (0 < knightY - 2 && knightY - 2 < 9){
         if (0 < knightX - 1 && knightX - 1 < 9){
            sum++;          
            } 
         if (0 < knightX + 1 && knightX + 1 < 9){
            sum++;          
         }
    }
   
    if (0 < knightY + 2 && knightY + 2 < 9){
         if (0 < knightX - 1 && knightX - 1 < 9){
            sum++;     
            } 
         if (0 < knightX + 1 && knightX + 1 < 9){
            sum++;
 
         }
    }   
   return sum;    
}
