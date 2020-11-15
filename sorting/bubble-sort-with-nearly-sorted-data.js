let a = [8, 1, 2, 3, 3, 4, 5, 6, 7, 9];

for (let i = a.length; i > 0; i--) {
  let noSwap = true;
  for (let j = 0; j < i - 1; j++) {
    console.log(a);
    if (a[j] > a[j + 1]) {
      let temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
      noSwap = false;
    }
  }
  console.log("ONE COMPLETE PASS");
  if (noSwap) break;
}

console.log(a);
