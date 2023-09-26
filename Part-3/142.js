class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    let node = new Node(val);
    this.head = node;
    this.tail = node;
    this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  cycle(po) {
    let data = this.head;
    let c = 1;
    while (data) {
      if (c == po) {
        // console.log(data.val);
        break;
      }
      c++;
      data = data.next;
    }
    this.tail.next = data;
    // console.log(this.tail.next.val);
    // console.log(this.tail.val);
  }


  LinkedList_Cycle(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
         let ptr = head;
         while(ptr !== slow){
            ptr= ptr.next;
            slow= slow.next;
         }
         console.log(ptr.val);
         return;
      }
    }
    console.log(null);

    // if(fast == null || fast.next==null){
    //     console.log(null);
    //     return;
    // }

    // let ptr1=head;
    // let ptr2=slow;

    // while(ptr1!=ptr2){
    //     ptr1=ptr1.next;
    //     ptr2= ptr2.next;
    // }
    // console.log(ptr1.val);
    
  }
}
let list = new LinkedList(3);

list.append(2);
list.append(0);
list.append(4);
list.cycle(2);

// list.print();

list.LinkedList_Cycle(list.head);
