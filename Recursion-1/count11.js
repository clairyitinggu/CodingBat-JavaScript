/* Given a string, compute recursively (no loops) the number of "11" substrings in the string. 
The "11" substrings should not overlap.
count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1 */
function count11(str) {
  if (str.length <= 1) return 0;

  if (str.slice(0, 2) === "11") {
    return 1 + count11(str.slice(2));
  } else {
    return 0 + count11(str.slice(1));
  }
}

console.log(count11("11abc11")); /* 2 */
console.log(count11("abc11x11x11")); /* 3 */
console.log(count11("111")); /* 1 */

/* 
count11("11abc11") → 2	2	OK	
count11("abc11x11x11") → 3	3	OK	
count11("111") → 1	1	OK	
count11("1111") → 2	2	OK	
count11("1") → 0	0	OK	
count11("") → 0	0	OK	
count11("hi") → 0	0	OK	
count11("11x111x1111") → 4	4	OK	
count11("1x111") → 1	1	OK	
count11("1Hello1") → 0	0	OK	
count11("Hello") → 0	0	OK */
