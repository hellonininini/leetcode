/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const set = new Set();
    for (const v of arr) {
        if (set.has(v / 2) || set.has(v * 2)) {
            return true;
        }
        set.add(v);
    }

    return false;
};
