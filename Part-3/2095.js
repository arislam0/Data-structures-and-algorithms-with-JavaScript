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

    this.lenght = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.lenght++;
  }

  print(data) {
    //   let data = this.head;

    while (data) {
      console.log(data.value);

      data = data.next;
    }
  }

  mid_value(head) {
    if (head === null || head.next === null) {
      return null;
    }
    let slow = head;
    let fast = head;
    let pre;
    while (fast && fast.next) {
      pre = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    pre.next = slow.next;
    this.print(head);
  }
}

let list = new LinkedList(1);

  list.append(3);
  list.append(4);
  list.append(7);

  list.append(1);
  list.append(2);
  list.append(6);

list.mid_value(list.head);

//   list.print();
