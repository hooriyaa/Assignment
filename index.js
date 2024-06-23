"use strict";
// QUESTION 1:
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`Even`);
    }
    else {
        console.log(`Odd`);
    }
}
checkEvenOdd(2);
checkEvenOdd(9);
checkEvenOdd(10);
//QUESTION 2
let arr = [1, 5, 6, 7, 8];
function arrayOperations(arr) {
    arr.push(2);
    arr.shift();
    console.log(`Modified array: ${arr}`);
}
arrayOperations(arr);
// QUESTION 3:
let numbers = [2, 4, 5, 7];
function multiplyArrbBy2(arr) {
    return arr.map((val) => val * 2);
}
let modifiedArr = multiplyArrbBy2(numbers);
console.log(modifiedArr);
// QUESTION 4:
let array = [1, 9, 4, 66, 88, 99];
function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    return Math.max(...numbers);
}
console.log(findLargest(array));
// QUESTION 5:
function reverseStrings(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStrings(`Hooriya`));
