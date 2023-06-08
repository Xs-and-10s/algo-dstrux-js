export class Stack<T> {
  LIFO: T[] = [];
  top = 0;

  push(element: T) {
    this.LIFO[this.top++] = element;
  }
  peek() {
    return this.LIFO[this.top - 1];
  }
  pop() {
    return this.LIFO[--this.top];
  }
  clear() {
    this.top = 0;
    this.LIFO.length = 0;
  }
  length() {
    return this.top;
  }
}
