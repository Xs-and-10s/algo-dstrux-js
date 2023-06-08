import { SingleLink } from '../dstrux';
import { reverse_sl_list } from './reverse_sl_list';

export function sum_sl_lists_lg_numbers(a, b) {
  const a_a = reverse_sl_list(a);
  const b_b = reverse_sl_list(b);
  const sum = special_sum_sl_lists_nnnn_numbers(a_a, b_b);
  return sum;
}

function special_sum_sl_lists_nnnn_numbers(a, b) {
  let res = 0;
  let r = null;

  while (a || b) {
    const aval = a ? parseInt(a.value, 10) : 0;
    const bval = b ? parseInt(b.value, 10) : 0;

    let sum = aval + bval + res;
    if (sum >= 10000) {
      sum -= 10000;
      res = 1;
    } else {
      res = 0;
    }

    const i = new SingleLink(sum);
    i.next = r;

    r = i;

    a = a ? a.next : null;
    b = b ? b.next : null;
  }

  // eslint-disable-next-line eqeqeq
  if (res == 1) {
    const i = new SingleLink(res);
    i.next = r;

    r = i;
  }

  return r;
}
