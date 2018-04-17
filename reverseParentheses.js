function reverseParentheses(s) {
     
     while(s.indexOf(")",0)!=-1) {
       
       var par1 = s.indexOf(")", 0);
       var par2 = s.lastIndexOf('(', par1);
       var arr = s.slice(par2 + 1, par1).split("").reverse().join("");
       var s = s.slice(0, par2) + arr + s.slice(par1 + 1); 
     }
     return s;
}
