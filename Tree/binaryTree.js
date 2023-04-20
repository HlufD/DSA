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
let e = new Node("E");
let f = new Node("F");
let g = new Node("G");

a.left = b;
a.right = c;
b.left = e;
c.left = f;
c.right = g;

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

const depthFirstRecursive = function (root, result) {
  if (root === null) return [];
  result.push(root.value);
  if (root.left) depthFirstRecursive(root.left, result);
  if (root.right) depthFirstRecursive(root.right, result);
  return result;
};
console.log(depthFirstRecursive(a, []));

/*       a
        / \
       b   c
     /  \     \
    d    e     f


  */
