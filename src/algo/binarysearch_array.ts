export function binarysearch_array(haystack: number[], needle: number): number {
  let lo = 0;
  let hi = haystack.length;

  // O(log N)
  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) {
      return v;
    }
    if (v < needle) {
      lo = m + 1;
    } else {
      hi = m;
    }
  } while (lo < hi);
  return -1;
}
