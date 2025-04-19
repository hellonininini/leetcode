/**
 * 思路:
 *  a. 一種方法所有乘積總和 / 自己本身 ，需判斷有0的狀況較不方便
 *  b. 一種方法使用兩個陣列 一個從最左邊開始乘 一個從最右邊開始乘法
 *      舉例: [a,b,c,d]
 *          從最左開始相乘的陣列    [1,         (1)*a,   (1*a)*b, (1*a*b)*c]
 *          從最右邊開始相乘的陣列  [(1*c*d)*b, (1*d)*c, (1)*d,    1       ]
 *          左右陣列相乘便會得到除了自己本身以外的乘積 [1*(1*c*d)*b, (1*a)*(1*d)*c, (1*a)*b*(1)*d, (1*a*b)*c*1]
 */

const productExceptSelf1 = function (nums) {
    const leftArr = [];
    const rightArr = [];
    let leftValue = 1;
    let rightValue = 1;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = leftValue;
        leftValue *= nums[i];
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        rightArr[j] = rightValue;
        rightValue *= nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftArr[i] * rightArr[i];
    }

    return result;
};

/**
 * 思路:
 *  基於以上版本做調整
 *  1. 只宣告一個陣列儲存乘積
 */
const productExceptSelf2 = function (nums) {
    let leftValue = 1;
    let rightValue = 1;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftValue;
        leftValue *= nums[i];
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= rightValue;
        rightValue *= nums[j];
    }

    return result;
};
