// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution
function solution(str, ending){
    const end = str.slice(str.length - ending.length);
    if(end === ending) return true;
    return false;
}