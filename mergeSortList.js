// https://www.interviewbit.com/problems/sort-list/
function Node(data) {
	this.data = data
	this.next = null
}

length = function(A) {
  var count = 1;
  while (A.next != null) {
    count++;
    A = A.next;
  }
  return count;
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
}
// 2 7 4 1
sortList = function(A) {
  var oldHead = A;
  var mid = Math.floor(length(A)/2);

  if (A.next == null) {
    return A;
  }

  while (mid - 1 > 0) {
    oldHead = oldHead.next;
    mid--;
  }
  var newHead = oldHead.next;
  oldHead.next = null;
  oldHead = A;

  var sortedA = sortList(oldHead);
  var sortedB = sortList(newHead);

  return mergeTwoLists(sortedA, sortedB);
};

var a = new Node(2);
var b = new Node(7);
var c = new Node(4);
var d = new Node(1);
a.next = b;
b.next = c;
c.next = d;

console.log(sortList(a));
