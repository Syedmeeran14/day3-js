//Return all the palindromes in an array using ARROW function


const arr = ['carecar', 1344, 12321, 'did', 'cannot','madam',121];
const isPalindrome = (el) => 
{
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};

const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));