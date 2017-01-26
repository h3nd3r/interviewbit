function search(A, B, path) {
  if (A == null) {
    return false;
  }
  if (A.data == B) {
    path.push(A.data);
    return true;
  }
  var left_check = search(A.left, B, path);
  var right_check = search(A.right, B, path);
  if (left_check || right_check) {
      path.push(A.data);
      return true;
  }
  return false;
};

lca = function(A, B, C) {
  var pathB = [];
  search(A, B, pathB);
  pathB.reverse();
  var pathC = []
  search(A, C, pathC);
  pathC.reverse();

  var i = 0;
  if (pathB != -1 && pathC != -1) {
      var shorter = pathB.length < pathC.length ? pathB.length : pathC.length;
      while(i < shorter && pathB[i] == pathC[i]) {
        i++;
      }
  }
  return i == 0 ? -1 : pathB[i-1];
};

function TreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;

  this.print = function() {
    var stack = [];
    stack.push(this);

    while (stack.length != 0) {
      var node = stack.pop();
      console.log(node.data);
      if(node.left != null) {
        stack.push(node.left);
      }
      if(node.right != null) {
        stack.push(node.right);
      }
    }
    console.log();
  }
};

var n14 = new TreeNode(14);
var n13 = new TreeNode(13);
var n25 = new TreeNode(25);
var n11 = new TreeNode(11);
var n36 = new TreeNode(36);
var n31 = new TreeNode(31);
var n23 = new TreeNode(23);
var n12 = new TreeNode(12);
var n32 = new TreeNode(32);
var n27 = new TreeNode(27);
var n8 = new TreeNode(8);


n14.left = n13;
n14.right = n25;
n13.left = n36;
n13.right = n11;
n25.right = n31;
n36.left = n23;
n36.right = n12;
n12.left = n32;
n11.left = n27;
n12.right = n8;

//n14.print();

console.log(lca(n14, 32, 27));
