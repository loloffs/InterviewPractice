// const palindrome = function(word) {
//   word = word.toString().toLowerCase();
//   const reversedWord = word.split('').reverse().join('')
//   if (reversedWord === word) {
//     return true
//   }
//   return false
// }


// console.log(palindrome("Anna"))


const palindrome = function(word) {
  word = word.toString().toLowerCase();
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) return true;
  return false;
};

console.log(palindrome('Anna'));