/**
 * find the first duplicated number for which the
 * duplicate has the minimum index of all duplicates
 */
export function first_dup_in_array(a: number[]) {
  const dict: Record<string, number> = {};

  for (let i = 0; i < a.length; i++) {
    if (dict.hasOwnProperty(a[i])) {
      return a[i];
    }

    dict[a[i]] = i;
  }

  return -1;
}
