// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(str) {
  const wordsArr = str.split("_");
  let convertedToCamelCase = "";
  for (let i = 0; i <= wordsArr.length - 1; i++) {
    if (i > 0) {
      convertedToCamelCase += wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    } else {
      convertedToCamelCase = wordsArr[i];
    }
  }
  return convertedToCamelCase;
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"