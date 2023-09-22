// 2 pointer
// slow, fast

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
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  print() {
    let data = this.head;
    let c = 0;
    while (data) {
      c++;
      console.log(c + ": " + data.value);
      data = data.next;
    }
  }

  mid_value(head) {
    
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null){
      slow=slow.next;
      fast=fast.next.next;
    }
    console.log(slow.value);

  }

  mid_value_2(head) {
    
    let n= 0;
    let tem = head;

    while(tem){
      n++;
      tem=tem.next;
    }

    let half = Math.floor(n/2);
    tem=head;

    while(half){
      tem= tem.next;
      half--;
    }
    console.log(tem.value);

  }

  mid_value_3(head) {
    let i=head;
    while (head && head.next) {
        head = head.next.next;
         i = i.next;
  }
  console.log(i.value);
}

binary_number(head){
    let n=0;
    let tem = head;
    while(tem){
      n++;
      tem=tem.next;
    }
    tem = head;
    let sum=0;
    while(tem){
      sum=sum + Math.pow(2,n-1)*tem.value;
      console.log(sum);
      tem=tem.next;
      n--;
    }
    console.log(sum);
}

}

let list = new LinkedList(0);

list.append(0);
list.append(1);
// list.append(0);
// list.append(4);
// list.append(5);

// list.append(6);

// list.append(7);
// list.append(8);
// list.append(9);
// list.append(10);
// list.append(11);

//   list.prepend(10);

// list.sumation(list.head);
// list.max_min(list.head);

  // list.print();

// list.mid_value(list.head);
// list.mid_value_2(list.head);
// list.mid_value_3(list.head);
list.binary_number(list.head);
