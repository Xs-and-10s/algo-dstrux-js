import { SingleLink } from '../dstrux';

type TSingleLink<T> = {
  value: T;
  next: TSingleLink<T> | null;
};

export function reverse_sl_list<T>(l: TSingleLink<T>) {
  let r = null;

  while (l) {
    const i = new SingleLink(l.value);
    i.next = r;

    r = i;
    (l as TSingleLink<T> | null) = l.next;
  }

  return r;
}
