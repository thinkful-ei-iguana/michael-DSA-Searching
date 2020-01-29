/* eslint-disable eqeqeq */
const Queue = require('./queue');

class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BST(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    } else {
      if(this.right == null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  badinsert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key > this.key) {
      if (this.left == null) {
        this.left = new BST(key, value, this);
      }
      else {
        this.left.badinsert(key, value);
      }
    } else {
      if(this.right == null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.badinsert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if(key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }

  // SEARCHES //
  bfs(tree, values=[]) {
    const queue = new Queue();
    const node = tree;
    queue.enqueue(node);
    while (queue.last) {
      const node = queue.dequeue();
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return values;
  }
  
  inOrderDFS(values=[]) {
    if (this.left) {
      values = this.left.inOrderDFS(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.inOrderDFS(values);
    }
    return values;
  }

  preOrderDFS(values=[]){
    values.push(this.value);
    if (this.left) {
      values = this.left.preOrderDFS(values);
    }
    if (this.right) {
      values = this.right.preOrderDFS(values);
    }
    return values;
  }

  postOrderDFS(values=[]) {
    if (this.left) {
      values = this.left.postOrderDFS(values);
    }
    if (this.right) {
      values = this.right.postOrderDFS(values);
    }
    values.push(this.value);
    return values;
  }

}

module.exports = BST;