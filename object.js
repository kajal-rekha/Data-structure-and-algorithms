const student = {
  name: "kajal",
  age: 24,
};

console.log(student["age"]);
student.class = "MA";
console.log(student);

const entries = Object.entries(student);
console.log(entries);

for (const [key, value] of entries) {
  console.log(key, value);
}
