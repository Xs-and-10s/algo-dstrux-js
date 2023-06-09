export function contains_close_dups(nums: number[], k: number) {
  const idx: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const oldIdx = idx[nums[i]];

    if (i - oldIdx <= k) return true;

    idx[nums[i]] = i;
  }
  return false;
}
