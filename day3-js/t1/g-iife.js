//Remove duplicates from an array using IIFE function


(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])