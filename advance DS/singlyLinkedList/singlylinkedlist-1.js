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
 *
 * @function {get} this methods gets the node value based on the index passed to the function. It uses a counter
 * and iterates through the whole list since liskd list does not have the indexes.\
 *
 * @function {set} this methods sets the node value based on the value and index passed to the function. It iterates through the whole
 * list since linked list does not have the indexes, gets that node and over writes the value for the same.
 *
 * @function {insert} this methods inserts/add the node value based on the index passed to the function.
 * 
 * @function {remove} this methods removes/subtracts the node value based on the index passed to the function.
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
    if (this.length === 0) this.tail = this.head;
    this.length++;
    return this;
  }

  get(nodeIndex) {
    if (
      nodeIndex > this.length ||
      typeof nodeIndex !== "number" ||
      nodeIndex < 0
    )
      return null;
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === nodeIndex) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }

  set(nodeVal, nodeIndex) {
    let currentNode = this.get(nodeIndex);
    if (currentNode) {
      currentNode.val = nodeVal;
      return true;
    }
    return false;
  }

  insert(nodeVal, nodeIndex) {
    if (nodeIndex < 0 || nodeIndex > this.length) {
      return "REQUEST NOT VALID";
    }
    this.length++;
    if (nodeIndex == 0) {
      this.unshift(nodeVal);
      return this;
    }
    if (nodeIndex == this.length) {
      this.push(nodeVal);
      return this;
    }
    let nextNode = this.get(nodeIndex);
    let prevNode = this.get(nodeIndex - 1);
    let currentNode = new Node(nodeVal);
    prevNode.next = currentNode;
    currentNode.next = nextNode;
    return this;
  }

  remove(nodeIndex) {
    if (nodeIndex < 0 || nodeIndex > this.length) {
      return "REQUEST NOT VALID";
    }
    this.length--;
    if (nodeIndex == 0) {
      this.shift(nodeVal);
      return this;
    }
    if (nodeIndex == this.length) {
      this.pop(nodeVal);
      return this;
    }
    let currentNode = this.get(nodeIndex);
    let prevNode = this.get(nodeIndex - 1);
    prevNode.next = currentNode.next;
    return this;
  }
}

const list = new SinglyLinkedList();

// ways to test the above code
// list.push("hi");
// list.push("there");
// list.push("Hey");
// list.push("rosh");
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("Hello");

// console.log(JSON.stringify(list));

// console.log(list.get(2));

// console.log(list.set("XYZ", 3));

// console.log(JSON.stringify(list));

// console.log("lsit1111 >>>", JSON.stringify(list));

// let abc = list.insert("Madam!!!", 2);
// let abc =  list.remove(2)
// console.log("abc>>>>>>", abc);

// console.log("lsit2222 >>>", JSON.stringify(list));
