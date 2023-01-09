//My solution
function validBraces(braces){
    let arr = [];
    for(let i = 0; i < braces.length; i++){
      if(braces[i] === '('){
        arr.push(')');
      } else if(braces[i] === '['){
        arr.push(']');
      } else if(braces[i] === '{'){
        arr.push('}');
      } else{
        let brace = arr.pop();
        if(brace !== braces[i]){
          return false;
        }
      }
    }
    return arr.length === 0;
}