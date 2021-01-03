/**
 * @this Node
 * @description class Node is a basic skeleton of linkedlist where it consist of only two values 1). current val or data 2). reference to next node
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("Hey");
list.push("rosh")
console.log(JSON.stringify(list));
