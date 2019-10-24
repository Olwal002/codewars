// Reversed strings
 // The first way

function solution(str){
    let reversed= ''; 
 
     for(let character of str ){
         reversed=character + reversed;
     }
     return reversed;
 
 }

 // the second way
 function solution(str){
    return str 
         .split('')
         .reverse()
         .join('')
    
    }