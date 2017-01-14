// Definition for singly-linked list.
//            function Node(data){
//                this.data = data
//                this.next = null
//            }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
    subtract : function(A){
  var length = 1;
  var blah = [];
  var a = A;
  while(a.next != null) {
    blah.push(a.data);
    a = a.next;
    length++;
  }
  blah.push(a.data);
  a = A;
  for (var i=0; i<Math.floor(length/2); i++){
      a.data = blah.pop() - a.data;
      a = a.next;
  }
  return A;
    }
};

