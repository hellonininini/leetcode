/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */

// 1. 使用指針方式，當指針與spaces[p]相等時加入空格，指針+1
// 2. 使用陣列方式，將字串分割放入arr，最後組裝回傳(join())
var addSpaces1 = function (s, spaces) {
    const arr = [];
    let p = 0; // pointer
    for (let i = 0; i < s.length; i++) {
        // 1.
        if (p < spaces.length && i === spaces[p]) {
            arr.push(" ");
            p++;
        }
        arr.push(s[i]);
    }

    // 2.
    return arr.join("");
};

// 1. 先分割第0個字串到 spaces[0]
// 2. 再依序用for迴圈分割 spaces[i-1] - spaces[i]
// 3. 由於spaces的最後一個沒有被處理到，所以最後要再分割一次
var addSpaces2 = function (s, spaces) {
    const arr = [];
    // 1.
    arr.push(s.slice(0, spaces[0]));
    // 2.
    for (let i = 1; i < spaces.length; i++) {
        arr.push(s.slice(spaces[i - 1], spaces[i]));
    }
    // 3.
    arr.push(s.slice(spaces.pop()));

    return arr.join(" ");
};
