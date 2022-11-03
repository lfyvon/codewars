// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

//My solution
function towerBuilder(nFloors) {
    let result = [];
    for(let i = 1; i <= nFloors; i++){
      let str = ""
      str += " ".repeat(nFloors - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(nFloors - i);
      result.push(str);
    }
    return result
}