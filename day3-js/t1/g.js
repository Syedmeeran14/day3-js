//Remove all the duplicates from an array using ANONYMOUS function


let array = [1,2,1,2,3,4];
let dup = function(array)
  {
    let dup = [...new Set(array)];
    console.log(dup);
  }
  dup(array);