/**
 * 思路:
 *  正序排列後n的index代表有多少小於n的數量
 */
// use too many memory
const smallerNumbersThanCurrent = function (nums) {
    const sortArr = [...nums].sort((a, b) => {
        return a - b;
    });
    const arr = [];
    const indexMap = {};
    sortArr.forEach((num, index) => {
        if (!indexMap.hasOwnProperty(num)) {
            indexMap[num] = index;
        }
    });
    for (let i = 0; i < nums.length; i++) {
        arr.push(indexMap[nums[i]]);
    }

    return arr;
};

// 神奇解法
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/1419341/JavaScript-Elegant-O(n)-solution
