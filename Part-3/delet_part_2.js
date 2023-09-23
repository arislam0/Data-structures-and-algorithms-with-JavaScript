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
  
    print() {
      let data = this.head;
      let c = 0;
      while (data) {
        c++;
        console.log(c + ": " + data.value);
        data = data.next;
      }
    }
    delet_item(node){
        node.value = node.next.value;
        node.next = node.next.next;
    }

  
  }
  
  let list = new LinkedList(10);
  
  list.append(20);
  list.append(30);
  list.append(40);
  list.delet_item(list.head.next);
  list.print() 
//   list.delet_item(this.head);
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
//   list.binary_number(list.head);
  