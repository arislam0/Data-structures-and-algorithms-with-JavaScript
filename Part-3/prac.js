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
  
    print() {
      let data = this.head;
      while (data) {
        console.log(data.val);
        data = data.next;
      }
    }
  
    remove_list_re(head, num) {
      if(head === null){
          return null;
      }
      head.next = this.remove_list_re(head.next,num);
      console.log(head.val);

      let s = head;
      if(head.val===num){
         s=head.next;
      }
      while(s){
        console.log(s.val);
        s=s.next;
      }
  
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
  
  list1.print();
  