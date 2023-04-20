class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");
let f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirst = function (root) {
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let curr = stack.pop();
    result.push(curr.value);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return result;
};

console.log(depthFirst(a));
