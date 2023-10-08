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

  print(data) {
    // let data = this.head;

    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
  merge_node(head) {

    let dummy = new LinkedList(0); // Create a dummy node.
    let ptr = dummy; // Point that dummy node to head.
    let tem = head;
    tem = tem.next;
    let sum =0;
    let c=0;
    while(tem){

      while(tem.value!==0){ // Iterate from dummy node till end & check if next value is 0.
          sum = sum+tem.value;
          tem=tem.next;
      }
      let node = new Node(sum); // Store the cur node to a different variable before going to next node for skipping the last 0.
      ptr.next = node;

      ptr=ptr.next;
      tem=tem.next;
      sum=0;
    }
    
    this.print(dummy.next); // At last return the head.
  }

  easy_to(head){

    let dummy = new LinkedList(0); // Create a dummy node.
    dummy.next = head; // Point that dummy node to head.
    let cur = head;
    let prev;

    while(cur.next){ // Iterate from dummy node till end & check if next value is 0.
      prev=cur;
      
      if(cur.next.value===0){
        // console.log(cur.value);
        cur=cur.next;
      }
      if(cur.next){ 
        // console.log(cur.value);
        cur.value = cur.value + cur.next.value; //3=1=4, 4+5=9, 9+2=11
        // console.log(cur.value);
        // console.log(cur.value);
        cur.next=cur.next.next;
        // console.log(cur.next.value);
      }
    }
    prev.next= null;
    // this.print(head);
    this.print(dummy.next);
 
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
// list.print(list.head);

// list.merge_node(list.head);
list.easy_to(list.head);

// let list1 = new LinkedList(0);

// list1.append(1);
// list1.append(0);
// list1.append(3);
// list1.append(0);
// list1.append(2);
// list1.append(2);
// list1.append(0);
// list1.print();
// list1.merge_node(list1.head);

// list2.merge_two_sorted_list(list1.head,list2.head);

// list2.merge_iterative(list.head);

// list2.print();
