function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const container = [];

  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      container.push(left[li++]);
    } else {
      container.push(right[ri++]);
    }
  }

  return container.concat(left.slice(li).concat(right.slice(ri)));
}

console.log(mergeSort([4, 3, 0, -1, 5, 9, 7, 6]));
