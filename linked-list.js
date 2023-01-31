class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  getData() {
    let currentEl = this.head;
    let container = [];

    while (currentEl) {
      container.push(currentEl.data);
      currentEl = currentEl.next;
    }

    return container;
  }

  remove(data) {
    let curEl = this.head;
    let prevEl = null;

    while (curEl) {
      if (data === curEl.data) {
        if (!prevEl) {
          this.head = curEl.next;
        } else {
          prevEl.next = curEl.next;
        }

        this.length--;
        return curEl.data;
      }

      prevEl = curEl;
      curEl = curEl.next;
    }

    return null;
  }

  find(index) {
    let curEl = this.head;
    let count = 0;

    while (curEl) {
      if (count === index) {
        return curEl.data;
      }

      count++;
      curEl = curEl.next;
    }
    return null;
  }

  reverse() {
    let curEl = this.head;
    let prevEl = null;
    let nextEl = null;

    while (curEl) {
      nextEl = curEl.next;
      curEl.next = prevEl;
      prevEl = curEl;
      curEl = nextEl;
    }

    this.head = prevEl;
  }
}

const myList = new LinkedList();

myList.add(8);
myList.add(9);
myList.add(11);
// myList.remove(9);
console.log(myList.getData());
console.log(myList.length);
console.log(myList.find(1));

myList.reverse();
console.log(myList.getData());
