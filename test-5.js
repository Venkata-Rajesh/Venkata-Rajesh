// console.log(null == undefined);
// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);

let a = 3;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c);

/**
 * @input string = "abc",
 * @output string = "cba"
 *
 */

let str = "abc";
let output = "";
let length = str.length;

for (let i = length - 1; i >= 0; i--) {
  output += str[i];
}
console.log(output);

let arr = [1, 42, 53, 3, 6, 8, 9];

// Use a variable to indicate whether any swaps occurred
let swapped = true;

// Repeat until no swaps are needed
while (swapped) {
  // Set swapped to false at the beginning of each iteration
  swapped = false;

  // Loop through the array until the second last element
  for (let i = 0; i < arr.length - 1; i++) {
    // Compare the current element with the next one
    if (arr[i] > arr[i + 1]) {
      // Swap them if they are out of order
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      // Set swapped to true to indicate a swap occurred
      swapped = true;
    }
  }
}
