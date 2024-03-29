let str = "he11llow23or34345234l53543d";
// let tstr = str.replace(/[1-9]/g, "");
let tstr = "";

for (let i in str) {
  if (
    (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
    (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
  ) {
    tstr += str[i];
  }
}

console.log(tstr);
