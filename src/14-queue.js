const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    this.queue.push(newNode);
    if (this.queue.length > 1) {
      this.queue[this.queue.length - 2].next = newNode;
    }
    if (this.queue.length === 1) {
      this.queue[this.queue.length - 1].next = newNode;
    }
  }

  dequeue() {
    const deleteNode = this.queue.shift();
    return deleteNode.value;
  }
}

module.exports = Queue;
