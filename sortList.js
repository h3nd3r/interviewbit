// https://www.interviewbit.com/problems/sort-list/

function Node(data) {
	this.data = data
	this.next = null
}
// 2 7 4 1
sortList = function(A) {
	var isDone = false;
	var current = A;
	var swaps = false;

	while(isDone == false && current.next != null) {
		if (current.next.data < current.data) {
			var tmp = current.data;
			current.data = current.next.data;
			current.next.data = tmp;
			swaps = true;
		}

		if (current.next.next != null) {
			current = current.next;
		} else {
			current = A;
			if (swaps == false) {isDone = true;}
			swaps = false;
		}
	}
	return A;
};

var a = new Node(2);
var b = new Node(7);
var c = new Node(4);
var d = new Node(1);
a.next = b;
b.next = c;
c.next = d;

console.log(sortList(a));
