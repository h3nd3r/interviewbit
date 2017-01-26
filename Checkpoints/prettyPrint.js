// https://www.interviewbit.com/problems/prettyprint/
prettyPrint = function(A){
  var length = (A*2) - 1;
  var arr = [];
  for (var i=0; i<length; i++) {
    arr[i] = [];
    for (var j=0; j<length; j++) {
      var temp = Math.max(length - i, length - j);
      var temp2 = Math.max(i+1, j+1);
      var temp3 = Math.max(temp, temp2);
      arr[i][j] = (temp3+1) - A;
    }
  }
  return arr;
};

console.log(prettyPrint(4));
