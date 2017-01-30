// https://www.interviewbit.com/problems/points-on-the-straight-line/
maxPoints = function(A, B) {
  var hash = {}, max = 0;
  for (var i=0; i<A.length-1; i++) {
    var slope = (B[i+1] - B[i])/(A[i+1] - A[i]);
    slope = isNaN(slope) ? 0 : slope;
    var b = B[i] - (slope*A[i]);
    if (hash[[slope,b]] == undefined) {
      hash[[slope,b]] = 2;
    } else {
      hash[[slope,b]] += 2;
    }
  }
  Object.keys(hash).forEach(function(key,index) {
    if (hash[key] > max) {
      max = hash[key];
    }
  }
  return max;
};

console.log(maxPoints([1,1],[2,2]));
