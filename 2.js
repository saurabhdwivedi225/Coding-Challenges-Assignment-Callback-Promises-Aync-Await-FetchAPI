/* 2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is:” along with the manipulated string or the new string to the console. 
// Expected Output 
mainipulateString("hello,word!",logString);
// The manipulated string is: HELLO,WORLD! */

// Solution :-

function mainipulateString(str,logString){
return logString(str);
}
mainipulateString("hello",logString);

// callback function 
function logString(string){
    let upperCaseString =  string.toUpperCase();
    console.log("The manipulated string is:",upperCaseString);
}






