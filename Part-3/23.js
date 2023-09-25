class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 0;
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
  mergeList(a, b) {
    let dummy = new LinkedList(-1);
    let curr = dummy;

    while (a && b) {
      if (a.value < b.value) {
        curr.next = a;
        a = a.next;
      } else {
        curr.next = b;
        b = b.next;
      }
      curr = curr.next;
    }
    curr.next = a || b;
    return dummy.next;
  }

  mergeLists(list) {
    
    if (list.length === 0) {
        return null;
      }
  
      while (list.length>1) {
        let a = list.shift();  // the head will contains the "less" length list
        let b = list.shift(); // acturally, we can use the linkedlist to replace it, 
        let mergeAB = this.mergeList(a,b);
        list.push(mergeAB);
      }

      let data = list[0];

      while(data){
        console.log(data.value);
        data=data.next;
      }
   
  }
}

let list1 = new LinkedList(1);
list1.append(4);
list1.append(5);
// list1.print();

let list2 = new LinkedList(1);
list2.append(3);
list2.append(4);
// list2.print();

let list3 = new LinkedList(2);
list3.append(6);

let list = new LinkedList(list1.head);
list.append(list2.head);
list.append(list3.head);

list.mergeLists([list1.head,list2.head,list3.head]);
// list.print();

// https://leetcode.com/problems/merge-k-sorted-lists/
