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
    this.lenght = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.lenght++;
    } else {
      let oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
      this.lenght++;
    }
  }
  unsift(value) {
    if (!this.head) return this.push(value);
    const newNode = new Node(value);
    let oldhead = this.head;
    this.head = newNode;
    newNode.next = oldhead;
    this.lenght++;
  }

  get shift() {
    let oldhead = this.head;
    this.head = oldhead.next;
    oldhead.next = null;
    this.lenght--;
  }
  get pop() {
    if (!this.head)
      return console.log("Are you kidding me?,you can't pop out of empty List");
    if (this.head === this.tail) {
      this.head = null;
      this.tail = this.head;
      this.lenght--;
    } else {
      let prevNode = this.head;
      let currNode = this.head.next;
      while (currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.lenght--;
    }
  }
  getByIndex(index) {
    let currHead = this.head;
    for (let i = 0; i < index; i++) {
      if (!currHead.next) return console.log("invalid index");
      currHead = currHead.next;
    }
    return currHead;
  }

  insertByIndex(index, value) {
    if (!this.head) return this.unsift(value);
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

let list = new LinkedList();
// list.push(1);
// list.push(2);
// list.traverse(list.head);
// console.log("------------------------------------------------");
// list.push(3);
// list.unsift(0);
// list.traverse(list.head);
// console.log("--------------------------------------------------");
// list.push(4);
// list.traverse(list.head);
// console.log("---------------------------------------------------");
// list.shift;
// list.traverse(list.head);
list.push(1);
list.unsift(0);
list.push(3);
list.traverse(list.head);
console.log("----------------------------------------------------");
list.pop;
list.traverse(list.head);
console.log("----------------------------------------------------");
list.pop;
list.traverse(list.head);
console.log("----------------------------------------------------");
list.pop;
list.traverse(list.head);
console.log("----------------------------------------------------");
// list.push(0);
// list.push(1);
// list.push(2);
// list.push(3);
console.log("-----------------------after pushing------------------");
//console.log(list.getByIndex(3));
console.log("------------------------------------------------------");
list.insertByIndex(3, 5);
list.push(1);
list.unsift(0);
list.traverse(list.head);
console.log("----------------------------------------------------");
//list.reomveByIndex(0);
list.reomveByIndex(1);
list.traverse(list.head);
console.log("----------------------------------------------------");
list.setByIndex(1, 1);
list.traverse(list.head);
