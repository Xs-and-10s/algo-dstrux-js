export class SingleLink {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor(value) {
    this.list = new SingleLink(value);
  }
  cons(value) {
    const l = this.list;
    const n = new SingleLink(value);
    n.next = l;
    this.list = n;
  }
  reduce(accum, f) {
    let l = this.list;
    while (l.next) {
      accum = f(accum, l.value);
      l = l.next;
    }
    accum = f(accum, l.value);
    accum = new SingleLink(accum);
    return accum;
  }
  map(functor) {
    let l = this.list;
    let n;
    while (l.next) {
      n = new SingleLink(functor(l.value));
      n.next = l.next;
      l = n.next;
    }
    n = new SingleLink(functor(l.value));
    return n;
  }
  filter(predicate) {
    let l = this.list;
    let n;
    while (l.next) {
      if (predicate(l.value)) {
        n = new SingleLink(l.value);
        n.next = l.next;
      }
      l = n.next;
    }
    if (predicate(l.value)) {
      n = new SingleLink(l.value);
    }
    return n;
  }
  reverse() {
    let l = this.list;
    let r = null;
    while (l) {
      const n = new SingleLink(l.value);
      n.next = r;
      r = n;
      l = l.next;
    }
    return r;
  }
  removeWhere(k) {
    // head match
    let head = this.list;
    if (head.value === k) {
      if (head.next) {
        head = head.next;
      } else {
        head = new SingleLink(null);
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
      curr = prev.next;
    }
    // last match
    if (curr && curr.value === k) {
      prev.next = null;
    }
    return head;
  }
  removeAllWhere(k) {
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
      curr = prev.next;
    }
    // last match
    if (curr && curr.value === k) {
      prev.next = null;
    }

    return head;
  }
}
