let a = [12, 34, 4, 5, 1, 8];

let sortedArr = bubbleSort(a);

function bubbleSort(b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] > b[j + 1]) {
        let temp = b[j];
        b[j] = b[j + 1];
        b[j+1] = temp;
      }
    }
  }
  return b;
}

console.log(sortedArr);
