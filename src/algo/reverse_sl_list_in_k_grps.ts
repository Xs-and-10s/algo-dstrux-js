import { SingleLink } from '../dstrux';

export function reverse_sl_list_in_k_grps<T>(head: SingleLink<T>, k: number) {
  if (!head || k < 2) return head;

  let count = 0;
  let now = head;
  let last = head;
  let tmp = null;

  while (now && count < k) {
    (now as SingleLink<T> | null) = now.next;
    count++;
  }

  if (count === k) {
    now = reverse_sl_list_in_k_grps(now, k);
    while (count-- > 0) {
      tmp = last.next;
      last.next = now;
      now = last;
      (last as SingleLink<T> | null) = tmp;
    }
    last = now;
  }

  return last;
}
