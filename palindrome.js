const isPalindrome = function(string) {
  string = string.toLowerCase()
  let reverse = string.split('').reverse().join('')
  if (string === reverse) {
    return true;
  }
  return false;
}

console.log(isPalindrome('Anna'))