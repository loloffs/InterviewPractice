const fizzBuzz = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(`${words[0]}${words[1]}\n`)
    } else if (i % multiples[0] === 0) {
      console.log(words[0])
    } else if (i % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i);
    }
  }
}

fizzBuzz([0, 90], [3, 5], ["fizz", "buzz"]);