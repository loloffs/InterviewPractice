// From Leetcode

// Given the array candies and the integer extraCandies, 
// where candies[i] represents the number of candies that the 
// ith kid has.

// For each kid check if there is a way to distribute extraCandies 
// among the kids such that he or she can have the greatest number of 
// candies among them. Notice that multiple kids can have the greatest 
// number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 


const kidsWithCandies = function(candies, extraCandies) {
  let result = []
  const biggestNum = Math.max.apply(null, candies)
  for (const candy of candies) {
    if ((candy + extraCandies) >= biggestNum) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result
}

console.log(kidsWithCandies([2,3,5,1,3], 3));

// output: [ true, true, true, false, true ]