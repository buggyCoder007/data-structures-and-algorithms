function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end && arr[middle] != val) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else if (val > arr[middle]) {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

let abc = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);

console.log(abc);
