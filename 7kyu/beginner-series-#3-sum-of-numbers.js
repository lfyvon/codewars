// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//My solution
function getSum( a,b )
{ 
  if(a === b){
    return a;
  }
  
  let num1 = a;
  let num2 = b;
  let sum = 0;
  
  if(a > b){
    num1 = b;
    num2 = a;
  }
  
  for(let i = num1; i <= num2; i++){
    sum += i;
  }
  return sum;
}