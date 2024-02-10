class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addData(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      newNode.prev = current;
      current.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  append(newNode) {
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size + 1) {
      console.log(`Invalid Index ${index}`);
      return;
    }

    const newNode = new Node(data);
    if (index == 1) {
      this.prepend(newNode);
    } else if (index == this.size + 1) {
      this.append(newNode);
    } else {
      if (index > this.size / 2) {
        let current = this.tail;
        let size = this.size;

        while (size > index) {
          current = current.prev;
          size--;
        }

        newNode.prev = current.prev;
        newNode.next = current;
        current = current.prev;
        current.next = newNode;
      } else {
        let current = this.head;
        let size = 1;

        while (size < index) {
          current = current.next;
          size++;
        }

        console.log({ DK: current });
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev = newNode;
        current = current.prev;
        console.log({ DK1: current });
        current.next = newNode;
      }
    }

    this.size++;
  }

  /* Show the data Head to tail */
  showDataH2T() {
    console.log("Data Head to Tail");

    let current = this.head;
    while (current) {
      console.log(current.data);
      // console.log({ current });
      current = current.next;
    }
  }

  /* Show the data tail to Head */
  showDataT2H() {
    console.log("Data Tail to Head");

    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

const newObj = new DoublyLinkedList();
newObj.addData(1);
newObj.addData(2);
newObj.addData(3);
newObj.addData(4);
newObj.addData(5);
newObj.insertAt(7, 2);
// newObj.insertAt(321, 2);

newObj.showDataH2T();
newObj.showDataT2H();
