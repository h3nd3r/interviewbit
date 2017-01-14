module.exports = { 
    //param A : array of integers
    //return an integer
    longestConsecutive : function(A){
  A.sort(function(a,b){return a-b;});
  if(A.length == 0){return 0;}

  var longest = 1;
  var count = 1;

  for(var i=1; i<A.length; i++){
      if ((A[i-1]+1) == A[i]) {
        count++;
      } else if ((A[i-1]) == A[i]) { }
      else {
        count = 1;
      }
      longest = Math.max(longest, count);
  }

  return longest;
    }
};
