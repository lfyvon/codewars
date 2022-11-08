// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My solution
function XO(str) {
    let check = str.toLowerCase().split('').reduce(function(acc,cur){
      let count = 0
      if(cur === 'x') count = -1;
      else if(cur === 'o') count = 1;
      return acc + count;
    }, 0);
    if(check !== 0) return false
    return true
}