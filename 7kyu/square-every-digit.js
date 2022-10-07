// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//My solution
function squareDigits(num){
    let result = num.toString().split('').map(el => Math.pow(parseInt(el), 2)).join('');
    return parseInt(result);
}