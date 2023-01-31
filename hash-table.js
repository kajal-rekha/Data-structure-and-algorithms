const createHashTable = (size) => {
  const storage = new Array(size);
  const numBuckets = storage.length;

  const hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % numBuckets;
  };

  // insert
  const insert = (key, value) => {
    const index = hash(key);

    if (!storage[index]) {
      storage[index] = [];
    }

    storage[index].push({ [key]: value });
  };

  // get

  const get = (key) => {
    const index = hash(key);

    if (!storage[index]) return null;

    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        return storage[index][i][key];
      }
    }

    return null;
  };

  // remove

  const remove = (key) => {
    const index = hash(key);

    if (!storage[index]) return null;

    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        storage[index].splice(i, 1);
        return key;
      }
    }
    return null;
  };

  return { insert, get, remove };
};

const myTable = createHashTable(20);

// insert
myTable.insert("name", "Kajal");
myTable.insert("age", 25);

//get
console.log(myTable.get("name"));

// remove
console.log(myTable.get("age"));
