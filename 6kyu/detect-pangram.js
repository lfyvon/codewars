// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My solution
function isPangram(string){
    const letters = string.toLowerCase().split(" ").join('');
    const check = new Array(26).fill(0);
    for(let i = 0; i < letters.length; i++){
      const num = letters.charCodeAt(i) - 97;
      check[num]++;
    }
    const result = check.filter(el => el === 0);
    if(result.length > 0) return false;
    return true;
}