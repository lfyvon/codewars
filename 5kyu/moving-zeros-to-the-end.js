// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//My solution
function moveZeros(arr) {
    let sortedArr = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        count++;
      } else{
        sortedArr.push(arr[i]);
      }
    }
      
    for(let i = 0; i < count; i++){
      sortedArr.push(0);
    }
    return sortedArr;
}