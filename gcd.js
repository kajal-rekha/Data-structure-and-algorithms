function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(gcd(18, 48));

// n --> n --> min (a,b)
// O(log n ) --> O(log min (a,b))
