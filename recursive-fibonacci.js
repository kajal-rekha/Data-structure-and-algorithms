// find the nth element from from fibonacci series
// f(n) = f(n-1) + f(n-2)
// n <= 0 --> 0
// n === 1 --> 1

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));
// O(2^n) -- > exponential
