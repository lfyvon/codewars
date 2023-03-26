//My solution
function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
    let result = 1;
    let i = 0;
    while(i < power){
      result *= number;
      i++;
    }
    return result;
}