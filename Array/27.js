/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 1. 使用指針k，如果遇到不是val的值，就+1，並將該值移動到nums[k]的位置(因為不能使用額外的空間，nums[k]是已經檢查過的值，所以覆蓋沒關係)
// 2. 最後返回k，即為新數組的長度
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // 1.
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    // 2.
    return k;
};
