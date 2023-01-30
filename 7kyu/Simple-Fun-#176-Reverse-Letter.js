//My solution
function reverseLetter(str) {
    return str.replace(/[^a-z]/ig, "").split('').reverse().join('');
}