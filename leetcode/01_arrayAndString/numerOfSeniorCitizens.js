/*
You are given a 0-indexed array of strings details. Each element of details provides 
information about a given passenger compressed into a string of length 15. The system is such that:

The first ten characters consist of the phone number of passengers.
The next character denotes the gender of the person.
The following two characters are used to indicate the age of the person.
The last two characters determine the seat allotted to that person.
Return the number of passengers who are strictly more than 60 years old.

Example 1:

Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
Output: 2
Example 2:

Input: details = ["1313579440F2036","2921522980M5644"]
Output: 0
*/

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count = 0;
  for(let i = 0; i < details.length; i++) {
      let str = details[i];
      let digit11 = parseInt(str[11]);
      let digit12 = parseInt(str[12]);
      let age = digit11 * 10 + digit12;
      (age > 60) ? count++ : count;
  }
  return count;
};

// Time complexity; O(n)
// Space complexity: O(1)

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]));
console.log(countSeniors(["9751302862F0693","3888560693F7262","5485983835F0649","2580974299F6042","9976672161M6561","0234451011F8013","4294552179O6482"]
));
