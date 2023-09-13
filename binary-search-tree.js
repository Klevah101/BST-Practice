// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!currentNode) {
      this.root = new TreeNode(val)
    }
    else {
      if (currentNode.val > val) {
        if (currentNode.left) this.insert(val, currentNode.left)
        else { currentNode.left = new TreeNode(val) }
      }
      else {
        if (currentNode.right) this.insert(val, currentNode.right)
        else { currentNode.right = new TreeNode(val) }
      }
    }
  }

  search(val, currentNode = this.root) {
    // Your code here
    let leftFound = false;
    let rightFound = false;
    if (!currentNode) return false;
    if (currentNode.val === val) return true
    if (currentNode.val > val) leftFound = this.search(val, currentNode.left)
    if (leftFound === true) return true
    if (currentNode.val < val) rightFound = this.search(val, currentNode.right)
    if (rightFound === true) return true
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return
    console.log(currentNode.val)
    if (currentNode.left) this.preOrderTraversal(currentNode.left)
    if (currentNode.right) this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    if (currentNode.left) this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    if (currentNode.right) this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    if (currentNode.left) this.postOrderTraversal(currentNode.left)
    if (currentNode.right) this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    // if (!this.head) return
    const queue = [];
    queue.push(this.root)
    //console.log(queue)
    while (queue.length) {
      let node = queue.shift();
      console.log(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const queue = [];
    queue.push(this.root)
    //console.log(queue)
    while (queue.length) {
      let node = queue.pop();
      console.log(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
