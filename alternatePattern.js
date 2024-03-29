let str = "Hello !! PEOPLE";

let altStr = "";

for (let i in str) {
  let charCode = str.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) {
    altStr += String.fromCharCode(charCode + 32);
  } else if (charCode >= 97 && charCode <= 122) {
    altStr += String.fromCharCode(charCode - 32);
  } else {
    altStr += str[i];
  }
}
console.log(altStr);
