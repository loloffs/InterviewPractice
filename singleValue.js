


const singleNumber = function(nums) {
  let result = [];
  for (let i = nums.length-1; i > 0; i--) {
    if (result.includes(nums[i])) {
      result.splice(i, 1);
    } else if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
};

console.log(singleNumber([1, 1, 2]));