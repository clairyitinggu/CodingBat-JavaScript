/* 
Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".


allStar("hello") → "h*e*l*l*o"
allStar("abc") → "a*b*c"
allStar("ab") → "a*b" */
function allStar(str) {
  if (str.length <= 1) return str;

  return str.slice(0, 1) + "*" + allStar(str.slice(1));
}
console.log(allStar("hello")); /* h*e*l*l*o  */
console.log(allStar("abc")); /* a*b*c  */
console.log(allStar("ab")); /* a*b  */
