/**
 * 思路:
 *  1. 轉成二進制且補滿32位數
 *  2. 前後各放一個指針進行互換
 *  3. 轉回10進制數字
 */
const reverseBits = (n) => {
    const arr = n.toString(2).padStart(32, 0).split("");
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start ++;
        end --;
    }

    return parseInt(arr.join(""), 2);
};
