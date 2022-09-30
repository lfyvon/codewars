// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//My solution
function pigIt(str){
    let reg = /[.,\/#?!$%\^&\*;:{}=\-_`~()]/;
    str = str.split(' ').map(el => el.match(reg) === null ? el.slice(1) + el.slice(0, 1) + "ay" : el);
    return str.join(' ');
}