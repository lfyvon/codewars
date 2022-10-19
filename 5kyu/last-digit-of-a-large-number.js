// DESCRIPTION:
// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 9^7 is 9, since 97^7 = 4782969. The last decimal digit of (2^200)^2^300 , which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0

// Remarks
// JavaScript, C++, R, PureScript, COBOL
// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

//My solution
var lastDigit = function(str1, str2){
    if(str2 === '0') return 1;
    let result = Number(str1.slice(-1));
    let count = Number(BigInt(str2) % 4n);
    if(count === 0) count = 4;
    result = Math.pow(result, count);
    return Number(String(result).slice(-1));
}