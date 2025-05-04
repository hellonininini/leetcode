/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
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
