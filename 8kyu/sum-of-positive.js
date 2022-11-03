// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My solution
function positiveSum(arr) {
    return arr.reduce((acc, cur) => {
      if(cur > 0) return acc + cur;
      else return acc + 0;
    }, 0)
}