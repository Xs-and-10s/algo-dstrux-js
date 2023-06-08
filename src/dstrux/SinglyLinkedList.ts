export class SingleLink<T> {
  value: T;
  next: SingleLink<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  list: SingleLink<T>;
  constructor(value: T) {
    this.list = new SingleLink(value);
  }

  toString(): string {
    const l = this.list;
    let str = '';
    while (l.next) {
      str += `${l.value} ->`;
    }
    str += `${l.value}`;
    return str;
  }

  cons(value: T) {
    const r = this.list;
    const l = new SingleLink(value);
    l.next = r;
    this.list = l;
  }

  reverse() {
    let l = this.list;
    let r = null;
    while (l && l.next) {
      const n = new SingleLink(l.value);
      n.next = r;
      r = n;
      l = l.next;
    }
    return r;
  }

  removeAllWhere(k: T) {
    // first matches
    let head = this.list;
    if (head === null) {
      return head;
    }
    while (head && head.value === k) {
      if (head.next) {
        head = head.next;
      } else {
        return this.list;
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
      (curr as SingleLink<T> | null) = prev.next;
    }
    // last match
    if (curr && curr.value === k) {
      prev.next = null;
    }

    return head;
  }
  removeFirstWhere(k: T) {
    // head match
    let head = this.list;
    if (head.value === k) {
      if (head.next) {
        head = head.next;
      } else {
        head = this.list;
      }
      return head;
    }
    // middle match
    const prev = head;
    let curr = head;
    while (curr.next) {
      if (curr.value === k) {
        prev.next = curr.next;
        return prev;
      }
      (curr as SingleLink<T> | null) = prev.next;
    }
    // last match
    if (curr && curr.value === k) {
      prev.next = null;
    }
    return head;
  }

  reduce<U>(accum: U, f: (a: U, x: T) => U): SinglyLinkedList<U> {
    let l = this.list;
    while (l && l.next && l.value) {
      accum = f(accum, l.value);
      l = l.next;
    }
    accum = f(accum, l.value);
    const result = new SinglyLinkedList(accum);
    return result;
  }

  map<U>(functor: (x: T) => U): SinglyLinkedList<U> {
    let l: SingleLink<T> | null = this.list;
    let m: SingleLink<U> | null;
    let head: SinglyLinkedList<U>;

    if (l && l.value) {
      m = new SingleLink<U>(functor(l.value));
      head = new SinglyLinkedList<U>(m.value);
      l = l.next;
      m = m.next;
    }
    while (l && l.next) {
      m!.next = new SingleLink(functor(l.next.value));
      l = l.next;
      m = m!.next; // .next === null
    }
    if (l && l.value && l.next === null) {
      m = new SingleLink(functor(l.value));
    }
    return head!;
  }

  filter(predicate: (v: T) => boolean): SinglyLinkedList<T> {
    let l: SingleLink<T> | null = this.list;
    let m: SingleLink<T> | null;
    let head: SinglyLinkedList<T>;
    if (l && l.value) {
      if (predicate(l.value)) {
        m = new SingleLink<T>(l.value);
        head = new SinglyLinkedList<T>(m.value);
        l = l.next;
        m = m.next;
      }
    }
    while (l && l.next) {
      if (predicate(l.value)) {
        m = new SingleLink<T>(l.value);
        l = l.next;
        m = m!.next;
      }
    }
    if (l && predicate(l.value)) {
      m = new SingleLink(l.value);
    }
    return head!;
  }
}
