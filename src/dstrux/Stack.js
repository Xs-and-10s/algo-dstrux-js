export class Stack {
  dataStore = [];
  top = 0;

  push(element) {
    this.dataStore[this.top++] = element;
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  pop() {
    return this.dataStore[--this.top];
  }
  clear() {
    this.top = 0;
    this.dataStore.length = 0;
  }
  length() {
    return this.top;
  }
}
