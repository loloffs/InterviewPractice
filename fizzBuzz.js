// const fizzBuzz = function(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(`${words[0]}${words[1]}`)
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0])
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1])
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz([1, 100], [3, 5], ["fizz", "buzz"]);











const fizzbuzz = function(range, words, multiples) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(`${words[0]}${words[1]}`);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
};

fizzbuzz([50, 200], ['fizz', 'buzz'], [10, 15]);



























// const fizzbuzz = function(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(`${words[0]}${words[1]}`);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzbuzz([25, 150], [4, 6], ['test', 'words']);