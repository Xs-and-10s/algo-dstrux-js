type TSingleLink<T> = {
  value: T;
  next: TSingleLink<T> | null;
  // constructor(value: T) {
  //   this.value = value;
  //   this.next = null;
  // }
};
export function remove_k_from_sl_list<T>(l: TSingleLink<T> | null, k: T) {
  // first matches
  let head = l;
  if (head === null) {
    return head;
  }
  while (head && head.value === k) {
    if (head.next) {
      head = head.next;
    } else {
      return null;
    }
  }
  // middle matches
  let prev = head;
  let curr = head;
  while (curr && curr.next) {
    if (k === curr.value) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    (curr as TSingleLink<T> | null) = prev.next;
  }
  // last match
  if (curr && curr.value === k) {
    prev.next = null;
  }

  return head;
}
