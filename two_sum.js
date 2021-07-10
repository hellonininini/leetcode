// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const index = nums.indexOf(target - current);
    if (index != -1 && index != i) {
      return [i, index];
    }
  }
};
