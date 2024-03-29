const fs = require("node:fs");

// const data = fs.readFileSync("./output.txt", "utf-8");
const data = fs.readFile("./outputt.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data, "data retrieved");
});

console.log(data);
