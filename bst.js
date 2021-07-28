

class Node {
  constructor(element,parent) {
    this.element = element;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0
  }
  add(element) {
    if (this.root === null) {
      this.root = new Node(element,null);
      this.size ++;
    } else {
      let currentNode = this.root;
      console.log('currentNode',element);
      // console.log(currentNode.element);
      let parent = null;
      let compare = null;

      while (currentNode) {
        compare = currentNode.element < element;
        parent = currentNode;
       if (compare) {
          currentNode = currentNode.right
       } else {
           currentNode = currentNode.left;
       }
      }

      const newNode = new Node(element,parent)

      if (compare) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
      this.size ++;
    }
  }
}

const bst = new BST()

const arr = [10,8,19,6,15,22,20];

arr.forEach(item=>{
  bst.add(item)
})

console.log(bst.root);