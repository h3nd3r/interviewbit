// https://www.interviewbit.com/problems/longest-palindromic-substring/
isPalindrome = function(A) {
  var arr = A.split("");
  for(i=0; i<Math.floor(arr.length/2); i++) {
      if (arr[i] != arr[arr.length-1-i]) {
        return false;
      }
  }
  return true;
};

longestPalindrome = function(A) {
  var ret = "";
  var tmp = "";
  var longest = 0;
  for (var i=0; i<A.length; i++) {
    for (var j=0; j<A.length; j++) {
      tmp = A.slice(i, A.length-j);
      if(isPalindrome(tmp)) {
          if(tmp.length > longest) {
            longest = tmp.length;
            ret = tmp;
          }
      }
    }
  }
  return ret;
};
// bbcccbb
console.log(longestPalindrome("abbcccbbbcaaccbababcbcabca"));
console.log(longestPalindrome("aaaabaaa"));
console.log(longestPalindrome("aaabaaaa"));
