/**
 * 思路:
 *  沒有存在列表的就放進obj中，一旦遇到重複就return
 */
 const containsDuplicate = (nums) => {
    // use too many memory
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (numMap[nums[i]]) {
           return true;
        } else {
            numMap[nums[i]] = true; // save memory use boolean
        }
    }
    return false;
};

/**
 * 思路:
 *  set中不能有重複值
 */
const containsDuplicate = (nums) => {
    const set = new Set(nums);

    return set.size != nums.length ? true : false;
};

// 極少量資料時set更快，極大量資料時obj更快，詳情參考 https://leetcode.com/problems/contains-duplicate/discuss/515531/Javascript-set-vs.-object