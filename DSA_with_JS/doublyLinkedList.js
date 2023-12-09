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
      this.prev = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(newNode) {
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(`Invalid Index ${index}`);
      return;
    }

    const newNode = new Node(data);
    if (index == 0) {
      prepend(newNode);
    } else if (index == this.size) {
      append(newNode);
    } else {
      
    }

    this.size++;
  }

  /* Show the data Head to tail */
  showDataH2T() {
    console.log("Data Head to Tail");

    let current = this.head;
    while (current) {
      console.log(current.data);
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
newObj.addData(11);
newObj.addData(121);
newObj.addData(61);
newObj.addData(17);
newObj.showDataH2T();
newObj.showDataT2H();
