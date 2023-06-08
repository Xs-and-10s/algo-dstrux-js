import { SingleLink } from '../dstrux';

export function merge_sl_lists<T>(l1: SingleLink<T>, l2: SingleLink<T>) {
  let head: SingleLink<T>;
  let curr: SingleLink<T>;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.value < l2.value) {
    curr = head = l1;
    (l1 as SingleLink<T> | null) = l1.next;
  } else {
    curr = head = l2;
    (l2 as SingleLink<T> | null) = l2.next;
  }
  head.next = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      curr.next = l1;
      (l1 as SingleLink<T> | null) = l1.next;
    } else {
      curr.next = l2;
      (l2 as SingleLink<T> | null) = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) curr.next = l1;
  else curr.next = l2;

  return head;
}
