const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numOfVowels = [];
  for (const char of data) {
    for (const vowel of vowels) {
      if (char === vowel) {
        numOfVowels.push(char);
      }
    }
  }
  return numOfVowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
