/**
 * 思路:
 *  不能出現第二天買，第一天賣 -> 永遠只需計算當日以後的售價
 *  找出最小值與之後的售價做比較 -> 找出最大售價
 */
 const maxProfit = (prices) => {
    let min = prices[1];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }

    return profit;
};