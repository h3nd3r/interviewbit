// https://www.interviewbit.com/problems/redundant-braces/
braces = function(A){
  var a = A.split("");
  var stack = [];
  var redundant = 1;
  for(var i=0; i<a.length; i++) {
    if (a[i] == "(") {
        stack.push(a[i]);
    } else if (a[i] == ")") {
        stack.pop();
        if (stack.pop() != "(") {
            return 1;
        }
    } else if (a[i] == "+" || a[i] == "-" || a[i] == "*" || a[i] == "/" ) {
        stack.push(a[i]);
    }
  }
  return 0;
};
