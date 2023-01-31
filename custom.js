"use strict";
// find the time complexity
function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum([2, 5, 6, 7, 9, 4])); // O(n) -- linear time complexity

function sum2(num1, num2) {
  return num1 + num2;
}
console.log(sum2(20, 30)); // o(1) -- constant time complexity

let n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i, j); // o(n^2) -- Quadratic time complexity
  }
}

// 3 nested for loop: o(n^3)-- cubic time complexity.

// o(1) --- best
// o(n)---- oky
// o(n^2)...... avoid
// o(n^3) ......avoid

// fibonacci.................
// i = (i - 1) + (i - 2)

function fibonacci(n) {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(8)); // o(n)

// factorial
// n! --> n * (n-1)!
// 8! --> 8 * (8-1)!
// 8! --> 8 * 7!

// 0! --> 1
// 5! --> 5 * 4!
// 6! --> 6 * 5 * 4 * 3 * 2
// 7! --> 7 * 6 * 5 * 4 * 3 * 2
// 7! --> 7 * 6!

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(8)); // O(n)

// 64-bits number system (64  ---> 1, 64 ---> 0)

// prime number
// 3 ---> (1 * 3), (3 * 1)
// 4 ---> (1 * 4), (4 * 1), (2 * 2)

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(125));
console.log(isPrime(1)); // O(n)
