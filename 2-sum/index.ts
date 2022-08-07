function twoSum(nums: number[], target: number): number[] {
  const store: Set<number> = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const remaingTarget = target - currentNumber;

    // here we check if we already have encountered the exactr number
    if (store.has(remaingTarget)) {
      return [i, nums.indexOf(remaingTarget)];
    } else {
      store.add(currentNumber);
    }
  }
  return [];
}
