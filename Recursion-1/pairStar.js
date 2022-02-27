/* Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".


pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a" */

function pairStar(str) {
  if (str.length <= 1) return str;

  if (str.slice(0, 1) === str.slice(1, 2)) {
    return str.slice(0, 1) + "*" + pairStar(str.slice(1));
  } else {
    return str.slice(0, 1) + pairStar(str.slice(1));
  }
}

console.log(pairStar("hello")); /* hel*lo */
console.log(pairStar("xxyy")); /* x*xy*y  */
console.log(pairStar("aaaa")); /* a*a*a*a */
