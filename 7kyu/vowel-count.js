// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution
function getCount(str) {
    let result = str.match(/[aeiou]/g);
    if(!result) return 0;
    else return result.length;
}