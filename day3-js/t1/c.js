//sum of all the numbers in an array using ANONYMOUS function


let arr = [1, 2, 3, 4, 5];
var sum = 0;

let total = function(arr)
{
for (var i = 0; i <arr.length; i++ )
  {
   sum += arr[i];
  }
console.log(sum);
}

total(arr);