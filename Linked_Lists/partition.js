// https://www.interviewbit.com/problems/partition-list/
function Node(data) {
	this.data = data
	this.next = null
};

partition = function(A, B) {
	var current = A, largerHead = null, largerTail = null, smallerHead = null, smallerTail = null, tmp = null;
	while (current != null) {
		tmp = current;
		current = current.next;
		if (tmp.data < B) {
			console.log("less");
			if (smallerTail == null) {
				smallerHead = tmp;
				smallerTail = tmp;
			} else {
				smallerTail.next = tmp;
				smallerTail = tmp;
				smallerTail.next = null;
			}
		} else if (tmp.data >= B) {
			console.log("more");
			if (largerHead == null) {
				largerHead = tmp;
				largerTail = tmp;
			} else {
				largerTail.next = tmp;
				largerTail = tmp;
				largerTail.next = null;
			}
		}
	}
	smallerTail.next = largerHead;

	tmp = smallerHead;
	while(tmp != null) {
			console.log(tmp.data);
			tmp = tmp.next;
	}
	return smallerHead;
};

//1->4->3->2->5->2 and x = 3,
var a = new Node(1);
var b = new Node(4);
var c = new Node(3);
var d = new Node(2);
var e = new Node(5);
var f = new Node(2);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

partition(a, 3);
