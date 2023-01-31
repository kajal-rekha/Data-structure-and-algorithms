const arr = [5, 6, 7, 9, 12, 10];
const mySet = new Set(arr);

mySet.add(8);
mySet.add(11);
console.log([...mySet]);

mySet.delete(9);
console.log(mySet);
console.log(mySet.has(7));
