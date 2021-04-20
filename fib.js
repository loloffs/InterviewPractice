// const fib = function(num) {

//   const result = [0, 1]

//   for (let i = 2; i <= num; i++) {
//     const prev1 = result[i-1]
//     const prev2 = result[i-2]

//     result.push(prev1 + prev2);

    
//   }
  
//   return result[num];

// }

// console.log(fib(0))




const fib = function(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}


console.log(fib(5));


// (2-1) + (2-2) = 1

// 0
// 1
// 1
// 2
// 3
// 5