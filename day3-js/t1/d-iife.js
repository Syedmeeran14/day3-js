//Return all the prime numbers in an array using IIFE function


let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];

 
let iife =( (function(num)
{
    if(num<2)
    {
      return false;
    }
    for(let i = 2; i < num; i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
    return true;
}) );

for (var index = 0; index < num.length; index++)
  {
    if (iife(num[index])) {
        result.push(num[index])
    }
  }
console.log(result);

