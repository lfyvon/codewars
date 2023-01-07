// DESCRIPTION:
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//My solution
snail = function(array) {
    let rowStart = 0;
    let rowEnd = array.length - 1;
    let colStart = 0;
    let colEnd = array.length - 1;
    let result = [];
    
    while(true){
      for(let i = colStart; i <= colEnd; i++){
        if(array[rowStart][i]){
          result.push(array[rowStart][i]);
        }
      }
      rowStart++;
      
      for(let i = rowStart; i <= rowEnd; i++){
        if(array[i][colEnd]){
          result.push(array[i][colEnd]);
        }
      }
      colEnd--;
      
      for(let i = colEnd; i >= colStart; i--){
        if(array[rowEnd][i]){
          result.push(array[rowEnd][i]);
        }
      }
      rowEnd--;
      
      for(let i = rowEnd; i >= rowStart; i--){
        if(array[i][colStart]){
          result.push(array[i][colStart]);
        }
      }
      colStart++;
      
      if(rowStart > rowEnd && colStart > colEnd){
        break;
      }
    }
    return result;
  }