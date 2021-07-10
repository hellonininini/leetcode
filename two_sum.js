// https://leetcode.com/problems/two-sum/


// 暴力解
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const index = nums.indexOf(target - current);
    if (index != -1 && index != i) {
      return [i, index];
    }
  }
};

// memory too big
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map[target - nums[i]] >= 0) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};
