// https://www.interviewbit.com/problems/longest-substring-without-repeat/
lengthOfLongestSubstring = function(A) {
  var longest = 0, hash = {};
  var a = A.split("");
  var current = 0;

  for(var i=0; i<a.length; i++) {
    if (hash[a[i]] == undefined) {
      hash[a[i]] = i;
      current++;
    } else {
      i = hash[a[i]] + 1;
      current = 1;
      hash = {};
      hash[a[i]] = i;
    }
    longest = longest > current ? longest : current;
  }
  return A.length == 0 ? 1 : longest;
};
console.log(lengthOfLongestSubstring("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
console.log(lengthOfLongestSubstring("dafdbc"));
console.log(lengthOfLongestSubstring("dadbc"));
//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
