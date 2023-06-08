type SingleLink<T> = {
  value: T;
  next: SingleLink<T> | null;
  // constructor(value: T) {
  //   this.value = value;
  //   this.next = null;
  // }
};

export function is_sl_list_palindrome<T>(l: SingleLink<T>) {
  if (!l || !l.next) return true;

  const stack = [];

  let curr = l;
  while (curr.next) {
    stack.push(curr.value);
    curr = curr.next;
  }
  stack.push(curr.value);

  curr = l;
  while (curr !== null && curr.next) {
    if (curr.value !== stack.pop()) {
      return false;
    }
    curr = curr.next;
  }
  if (curr.value !== stack.pop()) return false;
  return true;
}
