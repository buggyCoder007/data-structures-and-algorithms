let a = [12, -1, 4, 89, 13, 35];

for (let i = 0; i < a.length; i++) {
  let shouldSwap = false;
  let minIndex = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] < a[minIndex]) {
      minIndex = j;
      shouldSwap = true;
    }
  }
  if (shouldSwap) {
    let temp = a[i];
    a[i] = a[minIndex];
    a[minIndex] = temp;
  }
}

console.log(a);
