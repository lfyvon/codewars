// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My solution
function solution(string) {
    let result = "";
    for(let x of string){
      if(x === x.toUpperCase()) result += " ";
      result += x;
    }
    return result;
}