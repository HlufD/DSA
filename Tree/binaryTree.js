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

const depthFirst = (root) => {
  let stack = [root];
  let cur = root;
  const result = [];

  while (stack.length > 0) {
    if (cur.right || cur.left) {
      result.push(cur.value);
      stack.pop();
      if (cur.left) stack.push(cur.left);
      if (cur.right) stack.push(cur.right);
      cur = stack[stack.length - 1];
    } else {
      result.push(cur.value);
      stack.pop();
      cur = stack[stack.length - 1];
    }
  }
  return result;
};
//console.log(depthFirst(a));

const depthFirstRecursive = function (root) {
  if (root === null) return [];
  console.log(root.value);
  depthFirstRecursive(root.right);
  depthFirstRecursive(root.left);
};
depthFirstRecursive(a);

/*       a
        / \
       b   c
     /  \     \
    d    e     f


  */
