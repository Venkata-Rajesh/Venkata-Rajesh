function sortString(input) {
  const characters = input.split("");
  const length = characters.length;

  // Bubble sort
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        // Swap characters
        const temp = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = temp;
      }
    }
  }

  return characters.join("");
}

// Example usage:
const inputString = "hello";
const sortedString = sortString(inputString);
console.log(sortedString); // Output: ehllo
