// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//My solution
function duplicateEncode(word){
    word = word.toLowerCase().split('');
    const len = word.length;
    let result = ''
    for(let i = 0; i < len; i++){
      let count = 0
      for(let j = 0; j < len; j++){
        if(word[i] === word[j]) count++;
      }
      if(count > 1) result += ')';
      else result += '(';
    }
    return result;
}