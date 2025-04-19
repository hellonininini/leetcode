/**
 * 思路:
 *  1. 通過自身與陣列中前一數字相加來驗證大小
 *  2. 如果 arr[n] > arr[n] + arr[n-1] 說明arr[n-1]不會增加最大總和 -> 保留arr[n]
 *  3. 反之 arr[n] < arr[n] + arr[n-1] 說明arr[n-1]會增加最大總和 -> 保留總和值
 *  4. 得到新列陣列(相加結果)後取出最大值
 */
const maxSubArray1 = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }

    return Math.max(...nums);
};

/**
 * 思路:
 *  1. 與第一個解法相同
 *  2. 唯一不同是 arr[n] 與 arr[n] + arr[n-1] 的結果 每次都與最大值做比較
 */
const maxSubArray2 = (nums) => {
    let max = nums[0];
    let pre = nums[0];

    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(nums[i], pre + nums[i]);
        max = Math.max(max, pre);
    }

    return max;
};

// 較為複雜解法，待研究 -> https://leetcode.com/problems/maximum-subarray/discuss/364839/Divide-and-Conquer-Commented-Explanation-and-Big-O-(JS)
