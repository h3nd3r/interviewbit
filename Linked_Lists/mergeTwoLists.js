// https://www.interviewbit.com/problems/merge-two-sorted-lists/

function Node(data) {
	this.data = data
	this.next = null
}
mergeTwoLists = function(A, B) {
  var C = new Node(), current = C, prev;
  while (A != null || B != null) {
    var a = A != null ? A.data : B.data + 1;
    var b = B != null ? B.data : A.data + 1;
    if (a < b) {
      current.data = a;
      A = A.next;
    } else if (b < a) {
      current.data = b;
      B = B.next;
    } else {
      current.data = b;
      B = B.next;
    }
    current.next = new Node();
    prev = current;
    current = current.next;
  }
  prev.next = null;
  return C;
};

var a = new Node(2);
var b = new Node(4);
var c = new Node(7);

var d = new Node(1);
var e = new Node(3);
var f = new Node(7);
a.next = b;
b.next = c;

d.next = e;
e.next = f;

console.log(mergeTwoLists(a, d));
