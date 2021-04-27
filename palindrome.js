// const { truncate } = require("node:fs");

// const isPalindrome = function(string) {
//   string = string.toLowerCase()
//   let reverse = string.split('').reverse().join('')
//   if (string === reverse) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindrome('Anna'))


const palindrome = function(word) {
  word = word.toString().toLowerCase();
  const reversedWord = word.split('').reverse().join('')
  if (reversedWord === word) {
    return true
  }
  return false
}


console.log(palindrome("Anna"))