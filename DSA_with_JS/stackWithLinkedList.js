/* Stack Push, Pop and Peep code Using Linked List */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    let currentNode = this.head;
    if (!currentNode) {
      console.log("--------------> Stack is Empty <----------------");
      return;
    }

    this.head = currentNode.next;
    return;
  }

  peek() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

/* Start to creating Object */
const stackList = new Stack();
stackList.push(1);
stackList.push(11);
stackList.push(21);
stackList.push(22);
stackList.push(123);
stackList.peep();
stackList.push(12);
stackList.pop();
stackList.peep();
