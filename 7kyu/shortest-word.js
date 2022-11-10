// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution
function findShort(s){
    s = s.split(' ');
    let str = s[0];
    for(let i = 1; i < s.length; i++){
      if(str.length > s[i].length) str = s[i];
    }
    return str.length;
}