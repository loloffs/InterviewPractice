const piglatin = function(word) {
  let lastChar = word[word.length -1];
  let newWord = ''; 
    newWord += word.substring(1);
    newWord += lastChar + 'ay';
    return newWord;
}

let piggy = [];

for (let i = 2; i < process.argv.length; i++) {
  piggy.push(piglatin(process.argv[i]));
}

console.log(piggy.join(' '));
