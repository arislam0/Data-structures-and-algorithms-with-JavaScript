// slow and fast ekseth mil le...
// node {value, next, visited}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.tail.next = this.head;

    this.length = 1;
  }
  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;

    this.tail.next = this.head.next.next;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;

    this.tail.next = this.head;
    this.length++;
  }

  appendAt(value, position) {
    if (position === 1) {
      this.prepend(value);
    } else if (position === this.length) {
      this.append(value);
    } else {
      let newNode = new Node(value);
      let preNode = findNode(position - 1);

      preNode.next = newNode;
      newNode.next = preNode.next.next;
      this.length++;
    }
  }
  findNode(position) {
    let data = this.head;
    let c = 1;
    while (data) {
      if (c === position) {
        break;
      }
      c++;
      data = data.next;
    }
    return data;
  }

  print() {
    let data = this.head;
    let len = this.length;
    while (len+1 > 0) {
      console.log(data.value);
      data = data.next;
      len--;
    }
  }

  update_data(value, position) {
    let currentNode = this.findNode(position);
    currentNode.value = value;
  }
  findNode(n) {
    let count = 1;
    let data = this.head;

    while (data) {
      if (count == n) {
        break;
      }
      count++;
      data = data.next;
    }
    return data;
  }

  delet_item(position) {
    if (position === 1) {
      let preNode = this.findNode(position);
      this.head = preNode.next;
      this.tail.next = preNode.next;
      this.length--;
    } else if (position === this.length) {
      let preNode = this.findNode(position - 1);
      this.tail = preNode;
      this.tail.next = this.head;
      this.length--;
    } else {
      let preNode = this.findNode(position - 1);
      preNode.next = preNode.next.next;
      this.length--;
    }
  }

  circle_l(head) {

    let slow = head;
    let fast = head;
    let flag = false;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast.value === slow.value) {
        // console.log("slow: "+slow.value);
        // console.log("fast: "+fast.value);
        flag = true;
        break;
      }
    //   console.log("slow: "+slow.value);
    //   console.log("fast: "+fast.value);
    
    }
    console.log(flag);
  }

  circle_ccc(){
    let data1 = this.head;
    this.tail.next = data1.next.next;

  }
}

let list = new LinkedList(100);

list.append(200);
list.append(0);
list.append(500);
list.append(600);
list.append(700);
list.append(800);
// list.prepend(400);

// list.update_data(400,2);

// list.delet_item(2);
// list.delet_item(2);

list.print();
list.circle_l(list.head);
list.circle_ccc();
// console.log(list.head);
// console.log(list.tail);
