const arrayy = ['carecar', 1344, 12321, 'did', 'cannot','madam',121];
let el = [];
const isPalindrome = ((function(el)
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
}));

const findPalindrome = arrayy => {
   return arrayy.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arrayy));