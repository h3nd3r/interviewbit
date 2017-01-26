// https://www.interviewbit.com/problems/evaluate-expression/
evalRPN = function(A){
  var stack = [];
  for(var i=0; i<A.length; i++) {
    switch(A[i]) {
      case "*":
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a*b);
        break;
      case "+":
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a+b);
        break;
      case "/":
        var a = stack.pop();
        var b = stack.pop();
        stack.push(Math.floor(b/a));
        break;
      case "-":
        var a = stack.pop();
        var b = stack.pop();
        stack.push(b-a);
        break;
      default:
        stack.push(parseInt(A[i]));
    }
  }
  return stack[0];
};

console.log(evalRPN([ "4", "13", "5", "/", "+" ]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
