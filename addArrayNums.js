const addArrNums = function(arr) {
  let result = 0;
  for (const i of arr) {
    result += i;
  }
  return result;
};

console.log(addArrNums([1, 2, 18, 22]));