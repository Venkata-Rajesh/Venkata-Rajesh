// var a = 3;
// var b = a++;
// var c = ++a;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(x);
// var x = 5;
// console.log(x);

// console.log(y);
// let y = 10;
// console.log(y);

// const z = 15;
// z = 20;
// console.log(z);

const str = "memory";

let ob = {};

for (let i in str) {
  let char = str[i];

  if (ob[char]) {
    ob[char] += 1;
  } else {
    ob[char] = 1;
  }
}

console.log(ob);

console.log(undefined || 0);
