// https://www.interviewbit.com/problems/kth-row-of-pascals-triangle/

pascal = function(k) {
    var row = [1];

    for (var i = 0; i < k; i ++) {
      row.push(row[i] * (k-i) / (i+1));
    }

    return row
};

console.log(pascal(3));
