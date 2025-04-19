/**
 * 思路:
 *  設定兩個變數 1.最大長度max 2.暫存最大長度字串maxString
 *  如果目前字元存在maxString中，將maxString清除成空字串
 *  如果目前字元沒有存的maxString中
 *  放入maxString，max, maxString長度比大小，較大者放入max
 */
const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let maxString = '';

    for (let i = 0; i < s.length; i++) {
        if (maxString.indexOf(s[i]) > -1) {
           maxString = maxString.substring(maxString.indexOf(s[i]) + 1);
        }
        maxString += s[i];
        maxLength = Math.max(maxString.length, maxLength);
    }

    return maxLength
};