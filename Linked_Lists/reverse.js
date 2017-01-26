// https://www.interviewbit.com/problems/reverse-link-list-ii/
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
};

reverseBetween : function(A, B, C) {
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
      var nodes = this.reverse(cur, C - B + 1);
      prevNode.next = nodes[0];
      cur.next = nodes[1];
      break;
    }
    cur = cur.next;
  }

  return B == 1 ? prevNode.next : A;
};
