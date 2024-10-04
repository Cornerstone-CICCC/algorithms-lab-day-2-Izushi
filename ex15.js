// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

function findMax(numArr) {
  if (numArr.length === 1) {
    return numArr[0];
  }

  const maxNum = findMax(numArr.slice(1));
  return numArr[0] > maxNum ? numArr[0] : maxNum;
}