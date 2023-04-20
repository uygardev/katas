/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const numIndexesObject = {};
  let result;
  for (let k = 0; k < nums.length; k++) {
    numIndexesObject[nums[k]] = k;
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target-nums[i]
    if ((nums.includes(diff)) && (numIndexesObject[diff] !== i)) {
      result = [i, numIndexesObject[diff]];
      break;
    }
  }
  return result
};

console.log(twoSum([3,2,4], 6))