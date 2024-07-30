//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Solution 1: O(n^2)
function firstRecurringCharacter(input) {
  //check input
  if (!input.length) {
    return "Empty Arr!";
  }
  if (!Array.isArray(input)) {
    return "Not Arr!";
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// Solution 2: O(n)
function firstRecurringCharacter1(input) {
  //check input
  if (!input.length) {
    return "Empty Arr!";
  }
  if (!Array.isArray(input)) {
    return "Not Arr!";
  }

  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    if (set.has(input[i])) {
      return input[i];
    }
    set.add(input[i]);
  }
  return undefined;
}

// Solution 3: O(n)
/* convert arr to hash table
array = [2,5,1,2,3,5,1,2,4]
map = {
  2: 0,
  5: 1,
  1: 2,
  ...
}
*/
function firstRecurringCharacter2(input) {
  //check input
  if (!input.length) {
    return "Empty Arr!";
  }
  if (!Array.isArray(input)) {
    return "Not Arr!";
  }

  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) { // key can be 0 - falsy value
      return input[i];
    }
    map[input[i]] = i;
  }
  return undefined;
}

//Test case
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])); //5
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
console.log(firstRecurringCharacter2([])); // Empty Arr!
console.log(firstRecurringCharacter2([2, 3, 4, 5])); //undefined
console.log(firstRecurringCharacter2("hello")); //Not Arr!
