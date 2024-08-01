/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.


Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const runningSum = [];
  let sum;
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
      sum = prev + nums[i]; 
      runningSum.push(sum);
      prev = sum;
  }
  return runningSum;
};

// Time & space complexity: O(n)

// TEST CASE
console.log(runningSum([1,2,3,4])); // [ 1, 3, 6, 10 ]
console.log(runningSum([1,1,1,1,1])); // [ 1, 2, 3, 4, 5 ]
console.log(runningSum([3,1,2,10,1])); // [ 3, 4, 6, 16, 17 ]

// SOLUTION I LIKE:
// var runningSum = ((nums, val = 0) => nums.map(x => val = val + x));
