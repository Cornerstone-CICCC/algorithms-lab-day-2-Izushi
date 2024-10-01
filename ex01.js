// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(string) {
  const wordsArr = string.split(" ");
  const capitalizedWordsArr = wordsArr.map(word => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
  });
  return capitalizedWordsArr.join(" ");
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"