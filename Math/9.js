/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function (x) {
    if (x < 0) {
        return false;
    } else {
        const arr = x.toString().split("");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
};

/**
 * 解法:
 * 1. 如果是负数, 直接返回false
 * 2. 將x除以10後取餘數，便可拿到最後一位(放入reverse)
 * 3. 將x除以10後無條件進位，便可去掉最後一位(重新賦值給x)
 * 4. 將reverse乘以10加上這次的餘數(便可得到新的reverse)
 * 5. 重複2~4步驟，直到x完全沒有值(全部被去掉)
 * 6. 比對x與reverse
 */
var isPalindrome2 = function (x) {
    // 1.
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        // 2. & 4.
        reverse = reverse * 10 + (x % 10);
        // 3.
        x = Math.floor(x / 10);
    }

    // 6.
    return reverse === xcopy;
};
