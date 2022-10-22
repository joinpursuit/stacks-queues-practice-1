const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { urlToHttpOptions } = require("url");
const { maxHeaderSize } = require("http");


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const item = new Node(data);
    item.next = this.top;
    this.top = item;
  }

  pop() {
    let newItem = this.top;
    this.top = this.top.next;
    return newItem;
  }
  isEmpty() {
    if (this.top === null) return true;
    return false;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let item = this.top.next;
    while (item) {
      if (min > item.data) {
        min = item.data;
      }
      item = item.next;
    }
    return min;
  }

  size() {
    let item = this.top;
    let count = 0;
    while (item) {
      item = item.next;
      ++count;
    }
    return count;
  }
  sort() {
    //make array of data from stack
    const array = [];
    let item = this.top;
    while (item) {
      array.push(item.data);
      item = item.next;
    }
    //sort array
    array.sort();
    const newStack = new Stack();
    //use for loop to create `newStack`
    for (let i = array.length - 1; i >= 0; i--) {
      newStack.push(array[i]);
    }
    this.top = newStack.top;

    //reassign this.top to `newStack`
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  enqueue(data) {
    const newItem = new Node(data);
    if (this.first === null) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    ++this.size;
  }
  isEmpty() {
    return this.first === null;
  }
  dequeue() {
    const item = this.first;
    this.first = this.first.next;
    --this.size;
    this.max = null;
    return item.data;
  }

  count() {
    return this.size;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    if (this.max) return this.max;
    let max = this.first.data;
    let item = this.first.next;
    while (item) {
      if (max < item.data) {
        max = item.data;
      }
      item = item.next;
    }
    this.max = max;
    return max;
  }
}




module.exports = {
  Node,
  Queue,
  Stack,
};
