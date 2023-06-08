export class DoubleLink<T> {
  value: T;
  next: DoubleLink<T> | null;
  prev: DoubleLink<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  list: DoubleLink<T>;
  constructor(value: T) {
    this.list = new DoubleLink<T>(value);
  }
}
