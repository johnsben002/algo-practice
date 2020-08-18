/**
 * @param {number[]} prices
 * @return {number}
 */

 /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
  */

var maxProfit = function(prices) {
    console.log(prices);
    // build an array with max profit from each index
    const dp = new Array(prices.length).fill(null);
    const getMax = (index, bal) => {
      if (index >= prices.length) return 0;
      if (dp[index] !== null && bal === -Infinity) return dp[index];
      // if balance is empty buy stock or do nothing
      if (bal === -Infinity) {
        return dp[index] = Math.max(getMax(index + 1, prices[index]), getMax(index + 1, bal));
      }
      // if you have a balance, sell stock or do nothing
      return Math.max(getMax(index + 2, -Infinity) + (prices[index] - bal), getMax(index + 1, bal));
    };
    return getMax(0, -Infinity);
};

console.log(maxProfit([1,2,3,0,2]));