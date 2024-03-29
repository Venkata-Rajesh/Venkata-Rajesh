// function myfunc() {
//   console.log(name);
//   console.log(age);
//   var name = "BBBootstrap";
//   let age = 21;
// }
// myfunc();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

function output() {
  console.log(globalThis);
  x = 33;
  console.log(x);
  var x;
}
output();

// const str = "hello".slice(1, 5);
const str = "hello".substring(0, 2);
console.log(str);

console.log(Math.random() * 10);
