/**
 * https://leetcode.com/discuss/interview-question/4874329/Google-onsite-Interview-question
 * 
 * Consider a bank with some intial amount of money. Consider an array which represents list of transactions which are going to come through customers. + means deposit - means withdrawl. Bank can choose from which customer they want to start serving the customers and they can refuse any number of customers. But once they start they have to serve till the time its impossible to serve the customers. Maximize the total customers bank can serve.

Example :
Bank has 1 unit of money intially.
Customer transactions : [1, -3, 5, -2, 1]

answer = 3

Bank starts with customer with deposit of 5
1+ 5 = 6
6 - 2 = 4
4 + 1 =5

If bank starts at in index 0 can only serve 1 customer
1+1 =2
2-3 = -1 not possible
 */

function serveMaxCustomers(transactions, initial) {
  let sum = initial;
  let start = 0;
  let end = 0;
  let maxCustomers = 0;

  while (end < transactions.length) {
    sum += transactions[end];
    if (sum >= 0) {
      maxCustomers = Math.max(maxCustomers, end - start + 1);
    } else {
      while (start <= end && sum < 0) {
        sum -= transactions[start];
        start += 1;
      }
    }
    end += 1;
  }
  return maxCustomers;
}

console.log(serveMaxCustomers([1, -3, 5, -2, 1], 1));
console.log(serveMaxCustomers([-1, -1, -1, -1, 1, 1, 1, 1, 1], 1));
