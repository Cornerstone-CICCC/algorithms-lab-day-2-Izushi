// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  const letterArr = str.split("");
  let consonantsNum = 0;
  letterArr.forEach(letter => {
    if (!["a", "e", "i", "o", "u", " "].includes(letter)) {
      consonantsNum++;
    }
  });
  return consonantsNum;
}

console.log(countConsonants("hello world")); // Expected output: 7