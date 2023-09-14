//sum of all the numbers in an array using IIFE function


let arr = [1, 2, 3, 4, 5];
var sum = 0;

(function(arr)
{
for (var i = 0; i <arr.length; i++ )
  {
   sum += arr[i];
  }
console.log(sum);
})

(arr);