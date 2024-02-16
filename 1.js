/* 1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback. */

// Solution :- 
function doubledArrFunc(array, callback) {
    const doubledArray = array.map(callback); // Use map for array iteration
    return doubledArray; // Return the new array
  }
  
  function callback(num) {
    return num * 2; // Double the number
  }
  
  const arr = [4, 4, 5, 6, 7];
  const doubledValue = doubledArrFunc(arr, callback);
  console.log(doubledValue); // Output: [8, 8, 10, 12, 14]
  
