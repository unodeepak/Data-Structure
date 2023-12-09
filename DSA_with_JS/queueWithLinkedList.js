/* Queue Using the concept of Linked List */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  /* Add the element in Queue */
  enQueue(data) {
    const newNode = new Node(data);

    if (!this.rear) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  /* Delete the element from deQueue */
  deQueue() {
    if (!this.size) {
      console.log("======> Queue is Empty <=======");
      return;
    }

    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }
  }

  peek() {
    console.log("Data is : ");
    let current = this.front;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const queue = new Queue();
queue.enQueue(10);
queue.enQueue(20);
queue.peek();
queue.deQueue();
queue.deQueue();
queue.peek();
queue.enQueue(30);
queue.enQueue(40);
queue.peek();