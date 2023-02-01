// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//My solution
function count (string) {
    let str = string.split('');
    let map = new Map();
    for(let i = 0; i < str.length; i++){
      if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
      } else{
        map.set(str[i], 1);
      }
    }
    return Object.fromEntries(map);
}