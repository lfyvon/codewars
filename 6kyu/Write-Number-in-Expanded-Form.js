// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

//My solution
function expandedForm(num) {
    let result = [];
    while(num){
      let zeros = 1;
      for(let i = 0; i < num.toString().length - 1; i++){
        zeros *= 10;
      }
      let n = Math.floor(num / zeros) * zeros;
      result.push(n);
      num = num % zeros;
    }
    return result.join(' + ');
}