const fs = require("fs");

// Event loop & Different types of queues
// Exp-1
// console.log("Console.log 1");
// process.nextTick(() => console.log("This is process.next 1"));
// console.log("Console.log 2");

//Exp - 2.1
// Promise.resolve().then(() => console.log(" this is promise.resolve 1"));
// process.nextTick(() => console.log("This is process.nextTick 1"));

// Exp- 3 & 4

// setTimeout(() => {
//   console.log("this is setTimeout 1");
// }, 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(() =>
//     console.log("this is inner nextTick inside setTimeout")
//   );
// }, 0);
// setTimeout(() => {
//   console.log("this is setTimeout 3");
// }, 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));

// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is the inner next tick inside the next tick");
//   });
// });

// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside Promise then block");
//   });
// });

// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//Exp - 5

// setTimeout(() => {
//   console.log("this is the  setTimeout 1");
// }, 1000);

// setTimeout(() => {
//   console.log("this is the setTimeout 2");
// }, 500);

// setTimeout(() => {
//   console.log("this is the setTimeout 3");
// }, 0);

//Exp-6

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));

// Promise.resolve().then(() => console.log("This is process.resolve 1"));

//Exp-7

// setTimeout(() => {
//   console.log("this is setTimeout 1");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("This is read file 1");
// });

//Exp-8

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));

// Promise.resolve().then(() => console.log("this is Promise.resove 1"));

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// //Exp 9 - with 8

// setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}

//Exp-10:

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside readFile");
//   });
//   Promise.resolve().then(() =>
//     console.log("This is inner Promise.resolve inside readFile")
//   );
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));

// Promise.resolve().then(() => console.log("this is Promise.resove 1"));

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

//Exp-11:

// setImmediate(() => console.log("thi is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// });

// setImmediate(() => console.log("this is setImmediate 3"));

const readableStream = fs.createReadStream(__filename);

readableStream.close();

readableStream.on("close", () => {
  console.log("this is from readableStream close event callback");
});

setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this i setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
