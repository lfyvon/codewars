// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

//My solution
function isPalindrome(x) {
    x = x.toLowerCase();
    let result = true;
    for(let i = 0; i < Math.ceil(x.length / 2); i++){
      if(x[i] !== x[x.length - 1 - i]) result = false;
    }
    return result;
}

function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() === x.toLowerCase();
}