/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // 因為lower <= i + j < upper，可以視為 lower - i < j < upper - i，這樣就只要對j去做比較不用跑兩次for loop
        const low = lower - nums[i];
        const high = upper - nums[i];
        const leftIdx = getLeftIdx(nums, i + 1, low); // 取得符合j的最小值的index
        const rightIdx = getRightIdx(nums, i + 1, high); // 取得符合j的最大值的index
        const idxCount = rightIdx - leftIdx; // 兩index相減代表中間區間符合的數量
        count += idxCount;
    }

    return count;
};

// binary search找到符合條件的idx
const getLeftIdx = (arr, startIdx, target) => {
    let leftIdx = startIdx;
    let rightIdx = arr.length;
    while (leftIdx < rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[midIdx] < target) {
            leftIdx = midIdx + 1;
        } else {
            rightIdx = midIdx;
        }
    }

    return leftIdx;
};

const getRightIdx = (arr, startIdx, target) => {
    let leftIdx = startIdx;
    let rightIdx = arr.length;
    while (leftIdx < rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[midIdx] <= target) {
            leftIdx = midIdx + 1;
        } else {
            rightIdx = midIdx;
        }
    }

    return leftIdx;
};
