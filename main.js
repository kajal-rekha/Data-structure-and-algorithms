"use strict";

// power of 2
// 1 --> 2^0
// 2 --> 2^1
// 8 --> 2^3
// 9 --> flase
// 16 --> 2^4

function powerOfTwo(number) {
  if (number < 1) return false;
  while (number > 1) {
    if (number % 2 !== 0) return false;
    number = number / 2;
  }
  return true;
}

console.log("Power of 2");
console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(3));
console.log(powerOfTwo(25));
console.log(powerOfTwo(16)); // O(logn) - logarithmic
// unit step
// x = n
//y = [1,1,1,1,1,......n] --> time samples
function unitStep(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    y.push(1);
  }
  return y;
}
console.log(unitStep(10)); // O(n)

// unit ramp
// x = n
// y = [1,2,3,....n]

function unitRamp(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    y.push(i);
  }
  return y;
}
console.log(unitRamp(5)); // O(n)

// unit impulse
// x = 0
// y = 1, otherwise 0
// y = [1, 0, 0, .... n]
function unitImpulse(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) y.push(1);
    else y.push(0);
  }
  return y;
}
console.log(unitImpulse(8)); // O(n)

// trapping rain water
function trappingRainWater(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  if (height.length < 3) return water;
  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;
    if (leftMax > rightMax) {
      // water = waterLevel - elevetor height
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }
  return water;
}
console.log(trappingRainWater([5, 3, 4, 7, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 8, 7, 5, 6, 4, 2, 1, 5, 7]));

// recursion
// parts
// base case
// fibonacci
//[0,1,1,2,3,5,8,13,....n]
// 6th el = 8
// 7th el = 13
// [0,1]
// 0 -- > 0
// 1 --> 1
// el < 2; return el
// n = (n-1) + (n-2)
// n-1
// n-2
function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13

// input = 1 = n = 100
// called = 2 ^ n = 2 ^ 100
// O(2^n)  time complexity

// recursive factorial
//6! = 6 * 5 * 4 * 3 * 2
// 6! = 6 * 5!
// n! = n * (n-1)!
// n
// (n-1)!
// n === 0, 1
function recursivefactorial(n) {
  if (n === 0) return 1;
  return n * recursivefactorial(n - 1);
}
console.log("----------------------------");
console.log(recursivefactorial(0));
console.log(recursivefactorial(1));
console.log(recursivefactorial(4));
console.log(recursivefactorial(8));
console.log(recursivefactorial(6)); // O(n) - linear

// search algorithm
// arr = [23,34,54,22,12], 54 ---> 2
// arr = [23,34,54,22,12], 55 ---> -1
// arr = [23,34,54,22,12], 12 ---> 4
// linear search
function linearSearch(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log("------------------------");
console.log(linearSearch([23, 34, 54, 22, 12], 54)); // 2
// console.log(linearSearch([23, 34, 54, 22, 12], 55)); // -1
// console.log(linearSearch([23, 34, 54, 22, 12], 12)); // 4
//O(n) - linear */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([11, 14, 15, 16, 41, 51, 55], 16));
console.log(binarySearch([11, 14, 15, 16, 41, 51, 55], 51)); // O(logn)
