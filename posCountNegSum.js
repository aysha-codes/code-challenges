// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input === []) {
      return []
    } else {
        const posItems = []
      const negItems = []
      input.forEach(i => {
        if (Math.sign(i) === 1){
          posItems.push(i);
        } else if (Math.sign(i) === -1){
          negItems.push(i);
        }
      })
  
      let negSum = negItems.reduce(
        ( previousValue, currentValue ) => previousValue + currentValue,
        0
        )
      const finalArr = [posItems.length, negSum]
  
      return finalArr;
    }
  }

// Pseudo Code
// Iterate over the array, make two new arrays
// > One with all the positive numbers
// > one with all the negative numbers
// - For the positive array, get length; will be count
// - for the negative array, sum elements
// - Return both in a new array
// Need to account for null and 0 arrays
// Nest an if loop maybe?