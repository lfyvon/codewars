// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//My solution
function high(x){
    x = x.split(' ');
    let max = 0;
    let maxIndex = 0;
    for(let i = 0; i < x.length; i++){
      let sum = 0;
      for(let j = 0; j < x[i].length; j++){
        sum += x[i].charCodeAt(j) - 96;
      }
      if(sum > max){
        max = sum;
        maxIndex = i;
      }
    }
    return x[maxIndex];
}