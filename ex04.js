// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(string) {
  const letterCountObj = {};
  let mostFrequentLetter = "";
  let maxLetterCount = 0;

  for (const letter of string) {
    if (letterCountObj[letter]) {
      letterCountObj[letter]++;
    } else {
      letterCountObj[letter] = 1;
    }

    if (letterCountObj[letter] > maxLetterCount) {
      mostFrequentLetter = letter;
      maxLetterCount = letterCountObj[letter];
    }
  }

  return mostFrequentLetter;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"