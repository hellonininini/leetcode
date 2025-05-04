/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ret;
    if (x > 0) {
        ret = Number(x.toString().split("").reverse().join(""));
    } else {
        ret = -Math.abs(x).toString().split("").reverse().join("");
    }

    if (ret > Math.pow(2, 31) - 1 || ret < -Math.pow(2, 31)) {
        return 0;
    }

    return ret;
};
