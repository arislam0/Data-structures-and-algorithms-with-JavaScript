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

    print() {
      let data = this.head;
  
      while (data) {
  
        console.log(data.value);
  
        data = data.next;
  
      }
    }

    mid_value(head){

        let slow =head;
        let fast = head;

        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        
        return  slow;
    }
    
  }
  
  let list = new LinkedList(1);
  
  list.append(2);
  list.append(3);
  
  list.append(4);
  list.append(5);
//   list.append(6);
  
list.mid_value(list.head);

//   list.print();
  