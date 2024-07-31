/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 
and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 
and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (nums1, nums2) {
  const answer = [[], []];

  let distinctNums1 = [...new Set(nums1)];
  let distinctNums2 = [...new Set(nums2)];

  // convert distinct nums array to object/set
  let set1 = new Set(distinctNums1);
  let set2 = new Set(distinctNums2);

  // loop through distinct Nums2 array and check if match any values in set1
  for (let i = 0; i < distinctNums2.length; i++) {
    if (!set1.has(distinctNums2[i])) {
      answer[1].push(distinctNums2[i]);
    }
  }

  // loop through distinct Nums1 array and check if match any values in set2
  for (let i = 0; i < distinctNums1.length; i++) {
    if (!set2.has(distinctNums1[i])) {
      answer[0].push(distinctNums1[i]);
    }
  }
  return answer;
};

// Space complexity: 0(a+b)
// Time complexity: O(a+b)

// TEST CASE
console.log(findDifference([1, 2, 3], [2, 4, 6])); // [ [ 1, 3 ], [ 4, 6 ] ]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]

/*
SOLUTION I LIKE

var findDifference = function(nums1, nums2) {
  nums1 = new Set(nums1)
  nums2 = new Set(nums2)

  for (let item of nums1){
      if (nums2.has(item)) {
          nums1.delete(item)
          nums2.delete(item)
      }
  }
  return [Array.from(nums1),Array.from(nums2)]

};

*/
