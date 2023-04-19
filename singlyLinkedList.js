class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      let oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
      this.length++;
    }
  }
  unshift(value) {
    if (!this.head) return this.push(value);
    const newNode = new Node(value);
    let oldhead = this.head;
    this.head = newNode;
    newNode.next = oldhead;
    this.length++;
  }

  get shift() {
    if (!this.head) return "Empty List can't remove item";
    let oldhead = this.head;
    this.head = oldhead.next;
    oldhead.next = null;
    this.length--;
  }
  get pop() {
    if (!this.head) return console.log("you can't pop out of empty List");
    if (this.head === this.tail) {
      this.head = null;
      this.tail = this.head;
      this.length--;
    } else {
      let prevNode = this.head;
      let currNode = this.head.next;
      while (currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.length--;
    }
  }
  getByIndex(index) {
    if (index < 0) return;
    let currHead = this.head;
    for (let i = 0; i < index; i++) {
      if (!currHead.next) return console.log("invalid index");
      currHead = currHead.next;
    }
    return currHead;
  }

  insertByIndex(index, value) {
    if (!this.head) return this.unshift(value);
    const newNode = new Node(value);
    const prevNode = this.getByIndex(index - 1);
    const target = this.getByIndex(index);
    prevNode.next = newNode;
    newNode.next = target;
    return true;
  }

  reomveByIndex(index) {
    if (index === 0) return this.shift;
    const target = this.getByIndex(index);
    const prevNode = this.getByIndex(index - 1);
    const nextNode = this.getByIndex(index + 1);
    prevNode.next = nextNode;
    target.next = null;
    this.length--;
    return true;
  }
  setByIndex(index, value) {
    const target = this.getByIndex(index);
    target.value = value;
    return true;
  }
  traverse(head) {
    if (this.head === null)
      return console.log("List is empty can't traverse it");
    if (head.next === null) return console.log(head.value);
    console.log(head.value);
    this.traverse(head.next);
  }
}
