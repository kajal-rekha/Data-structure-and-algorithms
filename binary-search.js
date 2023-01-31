function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 6, 8, 9, 10, 12], 6));
console.log(binarySearch([3, 4, 7, 8, 11, 14], 11));

// O(log n)
//O(1)
