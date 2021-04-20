const objToArray = function(obj) {
  return Object.entries(obj);
}

const luke = {
  name: "Luke Oloffs",
  job: "Software developer",
  age: 27
}

console.log(objToArray(luke));


// Output 

// [
//   [ 'name', 'Luke Oloffs' ],
//   [ 'job', 'Software developer' ],
//   [ 'age', 27 ]
// ]