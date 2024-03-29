// let val = 5.67;
// console.log(Math.floor(val));
// console.log(Math.ceil(val));
// console.log(Math.round(val));

// let person = { name: "John", age: 30 };

// for (let [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

// let array = Array.from({ length: 5 }, (_, index) => index + 1);

// let a = Array.from({ length: 5 }, (_, index) => index + 3);

// console.log(array);
// console.log(a);

// console.log(Array(12).fill(0));

// let a;

// console.log(typeof a);

// if (typeof a === "undefined") console.log("Undefined");

// let a = 20;

// a = "string";

const str = "afsdkfhdskhfaklsdhfdshkfhhghghfjdsfjeuyruywehfhdsk";

let max = 1;
const dup = [];
let chat = str[0];
const hMap = {};

str.split("").forEach((el) => (hMap[el] = hMap[el] ? hMap[el] + 1 : 1));

for (let k in hMap) {
  if (hMap[k] > max) {
    max = hMap[k];
    char = k;
  }
  if (hMap[k] > 1) {
    dup.push(k);
  }
}

console.log(dup);
console.log(hMap);
console.log("max repeated character is %s and count is %d", char, max);

let arrayWithDuplicates = [1, 2, 3, 4, 5, 3, 2];

let counts = {};
arrayWithDuplicates.forEach(function (x) {
  //   counts[x] = (counts[x] || 0) + 1;
  counts[x] = counts[x] ? counts[x] + 1 : 1;
});

let arrayWithoutDuplicates = arrayWithDuplicates.filter(function (x) {
  return counts[x] === 1;
});

const du = [];
const u = [];
for (let k in counts) {
  if (counts[k] > 1) {
    du.push(+k);
  }
  if (counts[k] === 1) {
    u.push(+k);
  }
}

console.log(counts);
console.log(arrayWithoutDuplicates);
console.log(du);
console.log(u);
