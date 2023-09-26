class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    let node = new Node(val);
    this.head = node;
    this.tail = node;

    this.length = 1;
    this.c = 0;
  }

  append(val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print(head) {
    let data = head;
    while (data) {
      console.log(data.val);
      data = data.next;
    }
  }

  remove_list_re(head, num) {

    if(head == null){
        return null;
    }
    head.next = this.remove_list_re(head.next, num);
   console.log(head.next.val);

}

  remove_list(head, val) {
    if (head === null) {
      return null;
    }
    let dummy = new LinkedList(-1);
    dummy.next = head;
    let tail = dummy;

    while (tail != null && tail.next != null) {
      if (tail.next.val == val) {
        let tem = tail.next;
        tail.next = tem.next;
      } else {
        tail = tail.next;
      }
    }
    return dummy.next;
  }
}
let list1 = new LinkedList(1);

list1.append(2);
list1.append(6);
list1.append(3);
list1.append(4);
list1.append(5);
list1.append(6);

// list1.remove_list(list1.head, 6);
list1.remove_list_re(list1.head, 6);

// list1.print();
