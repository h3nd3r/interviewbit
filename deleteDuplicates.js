// https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/
function Node(data) {
	this.data = data
	this.next = null
};

deleteDuplicates = function(A) {
  var current = A;
  while (current.next != null) {
    if (current.data == current.next.data) {
      if (current.next.next == null) {
        current.next = null;
      } else {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return A;
};

var a = new Node(1);
var b = new Node(2);
var c = new Node(2);
var d = new Node(2);
a.next = b;
b.next = c;
c.next = d;

console.log(deleteDuplicates(a));
