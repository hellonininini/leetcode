/**
 * 思路:
 *  1. 先將input轉為二進位不補滿32位元
 *  2. 依序算有多少個1
 */
const hammingWeight1 = (n) => {
    let count = 0;
    const binary = n.toString(2);
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
        }
    }

    return count;
};

/**
 * 思路:
 *  1. n與2取餘數如果為1 count增加
 *  2. 算到n=0就跳出
 */
const hammingWeight2 = (n) => {
    let count = 0;
    while (n) {
        if (n % 2 == 1) {
            count++;
        }
        n = parseInt(n / 2);
    }

    return count;
};

/**
 * 思路:
 *  1. 用二進位與1比對
 *  2. 向右位移將已算過的位數濾掉
 *
 *  ex: 輸入9 -> 1001
 *  第一輪 1001 & 1 -> 1 -> count + 1 -> 右移 0100
 *  第二輪 0100 & 1 -> 0 -> count + 0 -> 右移 0010
 *  以此類推
 */
const hammingWeight3 = (n) => {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        count += n & 1;
        n >>= 1;
    }

    return count;
};
