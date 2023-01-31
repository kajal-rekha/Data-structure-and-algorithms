// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// n! = n * (n-1) * (n-2) * .....*1

function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(10));
