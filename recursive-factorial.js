// 3! = 3 * 2 *1
// 3! = 3 * 2!
// n! === n * (n-1)
// n === 0 --> 1

function fact(n) {
  if (n == 0) return 1;

  return n * fact(n - 1);
}

console.log(fact(8));
