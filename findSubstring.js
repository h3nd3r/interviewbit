findSubstring = function(A, B) {
  var hash = {};
  var length = B[0].length;
  B.forEach(function(element){hash[element] = [-1];});

  for (var i=0; i<A.length-3; i++) {
    var tmp = A.slice(i, i+3);
    if (hash[tmp] != undefined) {
      hash[tmp].push(i);
    }
  }

  Object.keys(hash).forEach(function(key) {
    hash[key].shift();
    console.log(key, hash[key]);
  });

  var combinations = [[]];
  for (var i=0; i<B.length; i++) { // number of substrings
    combinations[i] = [];
    for (var j=0; j<hash[B[i]].length; j++) {
      combinations[i][j] = hash[B[i]][j];
      console.log(hash[B[i]][j]);
    }
  }

  console.log(combinations);
  return [];
};

console.log(findSubstring("barfoohahthefoohahbarman", ["foo", "bar", "hah"]));
