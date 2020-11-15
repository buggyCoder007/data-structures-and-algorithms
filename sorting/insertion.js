let a = [12, -1, 4, 89, 13, 35];

for (let i = 1; i < a.length; i++) {
  console.log(a);
  for (j = 0; j < i; j++) {
    if (a[i] < a[j]) {
      let temp = a[j];
      a[j] = a[i];
      a[i] = temp;
    }
  }
  console.log("**************");
}
console.log(a);
