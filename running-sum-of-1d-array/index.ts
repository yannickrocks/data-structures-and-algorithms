function runningSum(nums: number[]): number[] {
  for (var i = 1; i < nums.length; i++) {
    // Result at index `i` is sum of result at `i-1` and element at `i`.
    nums[i] += nums[i - 1];
  }
  console.log(nums);
  return nums;
}
