// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

function countWordOccurrences(str, property) {
  const wordsArr = str.split(" ");
  let wordsCount = 0;
  wordsArr.forEach(word => {
    if (word === property) {
      wordsCount++;
    }
  });
  return wordsCount;
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2