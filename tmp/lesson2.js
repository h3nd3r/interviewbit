reverseBetween = function(A, B, C) {
  var cur = A;
  var prevNode = new Node("");

  if (B == C) {
    return A;
  }

  for (var i=1; i<C; i++) {
    if (i == B - 1) {
      prevNode = cur;
    } else if (i == B) {
      var tmp = cur.next;
      var nodes = reverse(cur, C - B + 1);
      prevNode.next = nodes[0];
      cur.next = nodes[1];
      break;
    }
    cur = cur.next;
  }

  return B == 1 ? prevNode.next : A;
}

reverse = function(A, count) {
  var cur = A;
  var tmp;
  var next = cur.next;

  for (var i = 1; i < count; i++) {
    tmp = next.next;
    // reverse
    next.next = cur;
    cur = next;
    next = tmp;
  }
  A.next = null;
  return [cur, tmp];
}

function Node(data) {
		this.data = data
		this.next = null
    this.print = function () {
      var cur = this;
      while (cur != null ) {
        console.log(cur.data);
        cur = cur.next;
      }
      console.log();
    };

};

var a = new Node("a");
/*var b = new Node("b");
a.next = b;
var c = new Node("c");
b.next = c;
var d = new Node("d");
c.next = d;
var e = new Node("e");
d.next = e;*/

a.print();

var tmp = reverseBetween(a, 1, 1);
tmp.print();
