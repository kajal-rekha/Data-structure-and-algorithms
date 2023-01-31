// ** given an array, find the largest element */

function largestEl(arr) {
  let largeEl = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeEl) {
      largeEl = arr[i];
    }
  }

  return largeEl;
}

console.log(largestEl([4, 7, 10, 18, 2]));
// el = n, run = n
// O(n) --> linear time complexity
//------------------------------------------------------------------------------------//

//** given an array, find the first element */

function findFirstEl(arr) {
  return arr.at(0);
}

console.log(findFirstEl([10, 20, 30, 40]));

// el = 10, run = 1
// O(1) --> constant
// ** ------------------------------------------------------------------------------------
