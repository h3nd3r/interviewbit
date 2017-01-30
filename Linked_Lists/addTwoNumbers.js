// https://www.interviewbit.com/problems/add-two-numbers-as-lists/
function Node(data){
	this.data = data
	this.next = null
}

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
addTwoNumbers = function(A, B) {
  var carry = 0;
  var C = new Node(0), current = C, prev;
  while (A != null || B != null || carry !=0) {
    var value = (A != null ? A.data : 0) + (B != null ? B.data : 0) + carry;
    carry = 0;
    if (value > 9) {
      carry = Math.floor(value/10);
      value = value % 10;
    }

    current.data = value;
    current.next = new Node(0);
    prev = current;
    current = current.next;

    if (A != null) A = A.next;
    if (B != null) B = B.next;
  }
  if (current.data == 0) {
    prev.next = null;
  }
  return C;
};

var a = new Node(2);
var b = new Node(4);
var c = new Node(3);
var d = new Node(5);
var e = new Node(6);
var f = new Node(4);
a.next = b;
b.next = c;
d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d));

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
