/* Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.


countHi("xxhixx") → 1
countHi("xhixhix") → 2
countHi("hi") → 1 */
function countHi(str) {
  if (str.length <= 1) return 0;

  if (str.slice(0, 2) === "hi") {
    return 1 + countHi(str.slice(2));
  } else {
    return countHi(str.slice(1));
  }
}
console.log(countHi("xxhixx")); /* 1 */
console.log(countHi("xhixhix")); /* 2 */
console.log(countHi("hi")); /* 1 */

/* Our Solution:

function countHi(str) {
  if (str.length <= 1) return 0;
  let count = 0;
  if (str.slice(0, 2)==="hi") count = 1;  // could use startsWith()
  return count + countHi(str.slice(1));
} */
