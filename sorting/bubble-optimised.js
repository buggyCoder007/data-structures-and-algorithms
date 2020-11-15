let a = [12, -1, 4, 89, 13, 35];

let sortedArr = optiomiseBubbleSort(a);

function optiomiseBubbleSort(b) {
  for (let i = b.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (b[j] > b[j + 1]) {
        let temp = b[j];
        b[j] = b[j + 1];
        b[j + 1] = temp;
      }
    }
  }
  return b;
}

console.log(sortedArr);
