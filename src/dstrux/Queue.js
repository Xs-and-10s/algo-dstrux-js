export class Queue {
  dataStore = [];

  enqueue(element) {
    this.dataStore.push(element);
  }
  dequeue() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    let theString = '';
    for (let i = 0; i < this.dataStore.length; i++) {
      theString += `${this.dataStore[i]}\n`;
    }
    return theString;
  }
  isEmpty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    return false;
  }
}
