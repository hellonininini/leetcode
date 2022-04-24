/**
 * 思路:
 *  檢查t的字元有沒有在s中
 *  有的話替換成空置串，沒有的話直接回傳false
 *  最後檢查字串長度是否全部被替換成空字串 length = 0
 */
const isAnagram1 = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        if (s.indexOf(t[i]) != -1) {
            s = s.replace(`${t[i]}`, '');
        } else {
            return false;
        }
    }

    return s.length ? false : true;
};

/**
 * 思路:
 *  設定map儲存s中的變數與次數
 *  檢查t中字元是否都有存在map
 *  一旦發現沒有直接回傳false，都檢查完就回傳true
 */
const isAnagram2 = function(s, t) {
    if (s.length != t.length) return false;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!obj[t[i]]) return false;
        obj[t[i]] --;
    }

    return true;
};

const isAnagram3  = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};