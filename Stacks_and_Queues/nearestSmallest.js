// https://www.interviewbit.com/problems/nearest-smaller-element/
prevSmaller = function(A){
  var B = [-1];
  var stack =[A[0]];
  for(var i=1;i<A.length;i++) {
    while(stack.length != 0) {
      if(stack[stack.length-1] >= A[i]) {
        stack.pop();
      } else {
        B.push(stack[stack.length-1]);
        break;
      }
    }
    if(B[i] == undefined) {
      B.push(-1);
    }
    stack.push(A[i]);
  }
  return B;
};

//-1 34 -1 27 -1 5 28 5 20

-1, 34, -1, 27, -1, 5, 28, 5, 20
console.log(prevSmaller([ 34, 35, 27, 42, 5, 28, 39, 20, 28 ]));
//[-1,8,9]
console.log(prevSmaller([8, 9, 10]));

//[-1,8,9,9,10]
console.log(prevSmaller([8, 9, 11, 10, 12]));
8,9,11,
//[-1]
console.log(prevSmaller([3]));
//[-1,-1,1,3]
console.log(prevSmaller([7,1,3,6]));
