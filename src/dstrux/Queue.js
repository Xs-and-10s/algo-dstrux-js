export class Queue {
  q = [];

  enqueue(element) {
    this.q.push(element);
  }
  dequeue() {
    return this.q.shift();
  }
  front() {
    return this.q[0];
  }
  back() {
    return this.q[this.q.length - 1];
  }
  toString() {
    let theString = '';
    for (let i = 0; i < this.q.length; i++) {
      theString += `${this.q[i]}\n`;
    }
    return theString;
  }
  isEmpty() {
    if (this.q.length === 0) {
      return true;
    }
    return false;
  }
}
