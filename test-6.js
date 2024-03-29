// write a function to calculate amstrong number
// 153 = 1^3 + 5^3 + 3^3 = 153
// 370 = 3^3 + 7^3 + 0^3 = 370
function isArmstrongNumber(num) {
  return (
    num
      .toString()
      .split("")
      .reduce(
        (sum, digit) => sum + Math.pow(parseInt(digit), num.toString().length),
        0
      ) === num
  );
}

console.log(isArmstrongNumber(154)); // true
console.log(isArmstrongNumber(370)); // true
