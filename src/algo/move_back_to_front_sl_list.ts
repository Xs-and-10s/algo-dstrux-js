import { SingleLink } from '../dstrux';

export function move_back_to_front_sl_list(l: SingleLink<number>, n: number) {
  if (n === 0) return l;
  if (l.next === null) return l;

  let cur;
  let tmp;
  while (n--) {
    cur = l;
    while (cur.next !== null) {
      tmp = cur;
      cur = cur.next;
    }
    cur.next = l;
    (tmp as SingleLink<number>).next = null;
    l = cur;
  }

  return l;
}
