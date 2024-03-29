const inArr = [1, 2, 3, 1, 5, 6, 2, 7, 5, 6, 10, 14, 21, 7, 3];
// const inArr = [1, 2, 3, 2, 4, 5, 5, 6];

const dupArray = inArr.filter((el, index) => {
  console.log(
    index + "!==" + inArr.indexOf(el) + "-->" + el,
    index !== inArr.indexOf(el)
  );

  return index !== inArr.indexOf(el);
});

// console.log(dupArray);

const uniqElemss = new Set();

let duplicatesArray = [];

for (let el of inArr) {
  if (uniqElemss.has(el)) {
    duplicatesArray.push(el);
  } else {
    uniqElemss.add(el);
  }
}

console.log(duplicatesArray);
