function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pointerEl = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pointerEl) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pointerEl, ...quickSort(right)];
}

console.log(quickSort([3, 4, 1, 0, -1, 11, 9]));

// O(n^2)
// space O(n)
