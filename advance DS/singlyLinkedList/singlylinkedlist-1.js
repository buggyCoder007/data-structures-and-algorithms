/**
 * @name {Node}
 * @description class Node is a basic skeleton of linkedlist where it consist of only two values 1). current val or data 2). reference to next node
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/***
 * @name {SinglyLinkedList}
 * @function {push} this method enables the user to push/insert to a linked list.The insert happens from the end
 *  After inserting the node it updates the tail to new node and increments the length by 1.
 * @function {pop} this method enables the user to pop/remove a node from a given linked list.The removal happens from the end
 *  After removing the node it updates the tail to seocnd last node and decrement the length by 1.
 */

class SinglyLinkedList {
  constructor(val) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
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

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode && currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return currentNode;
  }
}

const list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("Hey");
list.push("rosh");
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();


console.log(JSON.stringify(list));
