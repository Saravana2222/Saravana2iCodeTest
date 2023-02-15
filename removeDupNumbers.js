/* Question: 
- JavaScript program to reads a list of 10 numbers ranging between 1 to 100. 
- Assuming there are 4 duplicates in the list of numbers 
- The output should remove the duplicates and sort the remaining numbers in descending order */

function removeDuplicateNumbers(inputArr, minNum, maxNum) {
    
    // Throw error when out of range number is present in the list
    // Throw error when more than 10 numbers are entered in the list
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr.length > 10 || inputArr[i] < minNum || inputArr[i] > maxNum){
            throw new Error('Sorry! Entered list is not in range');
        }
    }
 
    // remove the duplicate numbers from the list
    let uniqueArr = [];   
    for(let i of inputArr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }

    // sort the list in descending order
    uniqueArr.sort(function(a, b) {
        return b - a;
      });
    
    // print the output
    console.log('Output numbers in descending order: ' + uniqueArr);
}

const minNum = 1;
const maxNum = 100;

// Enter the numbers here
let inputArr = [66, 43, 33, 66, 27, 33, 43, 100, 27, 1];

try {
    // calling the function and passing arguments
    removeDuplicateNumbers(inputArr, minNum, maxNum);
  } catch (e) {
    console.error(e);
  }