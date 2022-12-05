// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//My solution
function findUniq(arr) {
    const set = [...new Set(arr)];
    const check = [0, 0];
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === set[0]){
        check[0]++;
        if(check[0] > 1){
          result = set[1];
          break;
        }
      }else{
        check[1]++;
        if(check[1] > 1){
          result = set[0];
          break;
        }
      }
    }
    return result;
}