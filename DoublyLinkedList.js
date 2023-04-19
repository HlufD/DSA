class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
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
      let lastNode = this.tail;
      lastNode.next = newNode;
      newNode.prev = lastNode;
      this.tail = newNode;
      this.length++;
    }
    return true;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let firstNode = this.head;
      firstNode.prev = newNode;
      newNode.next = firstNode;
      this.head = newNode;
      this.length++;
    }
    return true;
  }
  get pop() {
    if (!this.head) return console.log("List is empty,can't pop");
    if (this.head === this.tail) {
      this.head = null;
      this.tail = this.head;
      this.length--;
    } else {
      let lastNode = this.tail;
      let preveNode = lastNode.prev;
      preveNode.next = null;
      lastNode.prev = null;
      this.tail = preveNode;
      this.length--;
    }
    return true;
  }
  get shift() {
    if (!this.head) return console.log("Empty list ,can't unshift");
    if (this.head === this.tail) return this.pop;
    else {
      let headNode = this.head;
      let nextNode = headNode.next;
      nextNode.prev = null;
      headNode.next = null;
      this.head = nextNode;
      this.length--;
    }
    return true;
  }
  getByIndex(index) {
    if (index < 0 || index > this.length) return console.log("invalid Index");
    let head = this.head;
    for (let i = 0; i < index; i++) {
      if (head !== null) {
        head = head.next;
      }
    }
    //console.log(head.value);
    return head;
  }
  insertByIndex(index, value) {
    if (index < 0 || index > this.length) return console.log("Invalid Index");
    if (!this.head || index > this.length - 1) return this.push(value);
    const newNode = new Node(value);
    const target = this.getByIndex(index);
    const prevNode = target.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = target;
    target.prev = newNode;

    this.length++;
  }
  removeByIndex(index) {
    if (index < 0 || index > this.length) return console.log("Invalid Index");
    if (index == 0) return this.shift;
    if (index == this.length - 1) return this.pop;
    let target = this.getByIndex(index);
    let prevNode = target.prev;
    let nextNode = target.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    target.next = null;
    target.prev = null;
    this.length--;
  }
  setByIndex(index, value) {
    if (index > this.length || index < 0) return console.log("Invalid index");
    let target = this.getByIndex(index);
    target.value = value;
    return true;
  }
  traverse(head) {
    if (!this.head) return console.log("Empty list");
    if (!head.next) return console.log(head.value);
    console.log(head.value);
    this.traverse(head.next);
  }
}

/*
const list = new LinkedList();
list.push(1);
list.push(2);
list.unshift(0);
list.traverse(list.head);
console.log("-------------------------------------------------");
list.pop;
list.pop;
list.pop;
list.unshift(0);
list.push(1);
list.push(2);
list.traverse(list.head);
console.log("-------------------------------------------------");
list.shift;
list.shift;
list.push(3);
list.unshift(1);
list.traverse(list.head);
console.log("--------------------------------------------------");
list.getByIndex(0);
list.getByIndex(1);
list.getByIndex(2);
console.log("------------------------------------------------------");
list.insertByIndex(2, 6);
list.insertByIndex(1, 68);
list.insertByIndex(5, 10);
list.traverse(list.head);
console.log("--------------------------------------------------");
//list.setByIndex(1, 70);
list.traverse(list.head);
console.log("----------------------Removing --------------------");
list.removeByIndex(1);
console.log("list lenght is:", list.length);
list.removeByIndex();
list.traverse(list.head);
*/
