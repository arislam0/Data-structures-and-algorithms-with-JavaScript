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
    removeNthNode(head, n){
       let dummy = new LinkedList(0);
       dummy.next = head;
       let left = dummy;
       let right = head;

       while(n>0 && right){
            right=right.next; // right shift
            n=n-1;
       }
       //3 
       while(right){
        
        left=left.next;
        right=right.next;
        
       }
       //3
       left.next=left.next.next;

       this.print(dummy.next);


    }
  
   
  }
  
  let list = new LinkedList(1);
  
    list.append(2);
    list.append(3);
    list.append(4);
  
    list.append(5);
  
    // list.print(list.head);
    list.removeNthNode(list.head, 2)
  