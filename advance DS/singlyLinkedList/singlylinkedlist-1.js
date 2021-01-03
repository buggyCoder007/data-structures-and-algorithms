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
 *
 * @function {push} this method enables the user to push/insert to a linked list.The insert happens from the end
 *  After inserting the node it updates the tail to new node and increments the length by 1.
 *
 * @function {pop} this method enables the user to pop/remove a node from a given linked list.The removal happens from the end
 *  After removing the node it updates the tail to seocnd last node and decrement the length by 1.
 *
 * @function {shift} this method enables the user to pop/remove/delete the a node from a given linked list.The removal happens from the start
 * fo the list instead of end. After removing the node it updates the head to seocnd node from the head as new head
 *  and decrement the length by 1.
 *
 * @function {unshift} this method enables the user to push/insert to a linked list.The insert happens from the start
 *  After inserting the node it updates the head to new node and increments the length by 1.
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

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
    if ((this.length === 0)) this.tail = this.head;
    this.length++;
    return this;
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
list.shift();
list.shift();
list.shift();
list.shift();
list.unshift("Hello");

console.log(JSON.stringify(list));
