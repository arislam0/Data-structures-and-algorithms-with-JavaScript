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

    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print() {
    let data = this.head;

    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
  merge_node(head) {
    
  }
}
let list = new LinkedList(0);

list.append(3);
list.append(1);
list.append(0);
list.append(4);
list.append(5);
list.append(2);
list.append(0);
list.print();

list.merge_node(list.head);

let list1 = new LinkedList(0);

list1.append(1);
list1.append(0);
list1.append(3);
list1.append(0);
list1.append(2);
list1.append(2);
list1.append(0);
list1.print();
// list1.merge_node(list1.head);

// list2.merge_two_sorted_list(list1.head,list2.head);

// list2.merge_iterative(list.head);

// list2.print();
