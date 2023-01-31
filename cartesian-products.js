// A x B
// A= [1,2]
// B = [x, y]
// A x B = [[1,x], [1,y], [2,x], [2,y]]

function cartesianProduct(setA, setB) {
  const result = [];

  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      result.push([setA[i], setB[j]]);
    }
  }

  return result;
}

console.log(cartesianProduct([1, 2, 3], ["x", "y"]));

// O(mn)
