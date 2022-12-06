// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//My solution
function solution(str){
    const result = [];
    for(let i = 0; i < str.length; i += 2){
      let s = str.slice(i, 2 + i);
      result.push(s.padEnd(2, '_'));
    }
    return result
}