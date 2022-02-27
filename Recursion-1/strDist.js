/* 
Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.


strDist("catcowcat", "cat") → 9
strDist("catcowcat", "cow") → 3
strDist("cccatcowcatxx", "cat") → 9 */

function strDist(str, sub) {
  if (str.length < sub.length) return 0;
  if (
    str.slice(0, sub.length) === sub &&
    str.slice(str.length - sub.length) === sub
  ) {
    return str.length;
  }
  if (str.slice(0, sub.length) !== sub) {
    return strDist(str.slice(1), sub);
  }

  return strDist(str.slice(0, str.length - 1), sub);
}

console.log(strDist("catcowcat", "cat")); /* 9 */
console.log(strDist("catcowcat", "cow")); /* 3  */
console.log(strDist("cccatcowcatxx", "cat")); /* 9 */

// strDist("catcowcat", "cat") → 9	9	OK
// strDist("catcowcat", "cow") → 3	3	OK
// strDist("cccatcowcatxx", "cat") → 9	9	OK
// strDist("abccatcowcatcatxyz", "cat") → 12	12	OK
// strDist("xyx", "x") → 3	3	OK
// strDist("xyx", "y") → 1	1	OK
// strDist("xyx", "z") → 0	0	OK
// strDist("z", "z") → 1	1	OK
// strDist("x", "z") → 0	0	OK
// strDist("", "z") → 0	0	OK
// strDist("hiHellohihihi", "hi") → 13	13	OK
// strDist("hiHellohihihi", "hih") → 5	5	OK
// strDist("hiHellohihihi", "o") → 1	1	OK
// strDist("hiHellohihihi", "ll") → 2	2	OK
