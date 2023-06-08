type TSingleLink<T> = {
  value: T;
  next: TSingleLink<T> | null;
};

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
    const l = this.list;
    const n = new SingleLink(value);
    n.next = l;
    this.list = n;
  }
  reduce(accum: T | TSingleLink<T>, f: (a: T | TSingleLink<T>, x: T) => T) {
    let l = this.list;
    while (l.next) {
      accum = f(accum, l.value);
      l = l.next;
    }
    accum = f(accum, l.value);
    accum = new SingleLink(accum);
    return accum;
  }
  // map<U>(functor: (x: T) => U) {
  //   let l = this.list;
  //   let n: TSingleLink<U>;
  //   while (l.next) {
  //     n = new SingleLink(functor(l.value));
  //     n.next = l.next;
  //     (l as TSingleLink<U> | null) = n.next;
  //   }
  //   n = new SingleLink(functor(l.value));
  //   return n;
  // }
  // filter(predicate: (cond: T) => boolean): TSingleLink<T> {
  //   let l = this.list;
  //   let n: TSingleLink<T>;
  //   while (l.next) {
  //     if (predicate(l.value)) {
  //       n = new SingleLink(l.value);
  //       n.next = l.next;
  //       l = l.next;
  //     }
  //     (l as TSingleLink<T> | null) = n.next;
  //   }
  //   if (predicate(l.value)) {
  //     n = new SingleLink(l.value);
  //   }
  //   return n;
  // }
  reverse() {
    let l = this.list;
    let r = null;
    while (l) {
      const n = new SingleLink(l.value);
      n.next = r;
      r = n;
      (l as TSingleLink<T> | null) = l.next;
    }
    return r;
  }
  // removeFirstWhere(k: T) {
  //   // head match
  //   let head = this.list;
  //   if (head.value === k) {
  //     if (head.next) {
  //       head = head.next;
  //     } else {
  //       head = new SingleLink(null);
  //     }
  //     return head;
  //   }
  //   // middle match
  //   const prev = head;
  //   let curr = head;
  //   while (curr.next) {
  //     if (curr.value === k) {
  //       prev.next = curr.next;
  //       return prev;
  //     }
  //     (curr as TSingleLink<T> | null) = prev.next;
  //   }
  //   // last match
  //   if (curr && curr.value === k) {
  //     prev.next = null;
  //   }
  //   return head;
  // }
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
}
