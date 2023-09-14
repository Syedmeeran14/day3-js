//sum of all the numbers in an array using ARROW function


let total = (arr) =>
{
var sum = 0;
for (var i = 0; i <arr.length; i++ )
  {
   sum += arr[i];
  }
console.log(sum);
}

total([1,2,3,4,5]);