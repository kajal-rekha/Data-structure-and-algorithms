class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BianarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // dfs

  preOrder(root) {
    if (root) {
      // print root
      console.log(root.value);
      // go to left
      this.preOrder(root.left);
      // go to right
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
}

const bst = new BianarySearchTree();
// console.log(bst.isEmpty());

bst.insert(10);
bst.insert(18);
bst.insert(12);
bst.insert(8);
bst.insert(0);

// bst.preOrder(bst.root);

bst.inOrder(bst.root);
