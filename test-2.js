const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8, 10, 10, 10, 10];

// const uniqueArr = Array.from(new Set(arr)).sort((a, b) => b - a);
const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);

console.log(uniqueArr);

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < largest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest);

const num = "stri";
