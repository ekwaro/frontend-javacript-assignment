//Write a function named twoSum which takes two parameters: nums
//and target. Given an array of integer nums and an integer target, return
//indices of the two numbers such that they add up to the target. You
//may assume that each input would have exactly one solution, and you
//may not use the same element twice.
//You can return

const twoSums = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
twoSums([3, 2, 4], 6);
