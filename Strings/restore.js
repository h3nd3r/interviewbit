// https://www.interviewbit.com/problems/valid-ip-addresses/
isValidIpAddress = function(A) {
  var a = A.split("."), b = true;

  a.forEach(function(element) {
    var aInt = parseInt(element);
    if( element === "") {b = false;}
    if((element[0] == '0') && (element.length > 1)) { b = false; }
    if( aInt < 0 || aInt > 255) { b = false; }
  });
  return b;
}

restoreIpAddresses = function(A) {
  var B = [];
  var arr = A.split("");

  for (var a=1; a<4; a++) {
    var aString = arr.slice(0, a).join("") + ".";
    for (var b=1; b<4; b++) {
      if (a+b <= arr.length) {
        var bString = aString + arr.slice(a, a+b).join("") + ".";
        for (var c=1; c<4; c++) {
          if (a+b+c <= arr.length) {
            var cString = bString + arr.slice(a+b, a+b+c).join("") + ".";
            for (var d=1; d<4; d++) {
              if (a+b+c+d <= arr.length) {
                var dString = cString + arr.slice(a+b+c, a+b+c+d).join("");
                if(dString.length == (arr.length + 3)) {
                  if(isValidIpAddress(dString)){
                    B.push(dString);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return B;
};
console.log(restoreIpAddresses("0100100"));
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("025311135"));
