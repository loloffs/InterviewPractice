const hashtag = function(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str[i+1] = str[i+1].toUpperCase();
    }
  }
  str = str.split(' ').join('');
  str = `#${str}`
  return str;
};

console.log(hashtag('Hello my name is Luke'));



