/* Given a string, compute recursively a new string where all the 'x' chars have been removed.


noX("xaxb") → "ab"
noX("abc") → "abc"
noX("xx") → "" */
function noX(str) {
  if (str.length === 0) return str;

  if (str.slice(0, 1) === "x") {
    return "" + noX(str.slice(1));
  } else {
    return str.slice(0, 1) + noX(str.slice(1));
  }
}
console.log(noX("xaxb")); /* ab */
console.log(noX("abc")); /* abc */
console.log(noX("xx")); /* "" */
