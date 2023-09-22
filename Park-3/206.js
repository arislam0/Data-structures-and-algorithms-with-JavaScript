class Node{
  constructor(value=null,next=null){
      this.value=value;
      this.next=next;
  }
}

class LinkedList{
  constructor(value){
      let node = new Node(value);
      this.head = node;
      this.tail = node;

      this.length = 1;
      this.c = 0;
  }

  append(value){
      let node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.length++;
      
  }

  print(head){
      let data = head;

      while(data){
          console.log(data.value);
          data=data.next;
      }
  }

  reverse1(head){
    if(head == null || head.next == null){
      return head;
    }

    let rh = this.reverse1(head.next); ///5
    // console.log(rh.value);
    // console.log(head.value);
    
    head.next.next = head; //head.next 2 next->1;
    console.log(head.next.next.value);

    head.next = null; //1->next
  
    return rh;

  }

  reverse_main(head){
    let rev = this.reverse1(head);

    while(rev){
        console.log(rev.value);
        rev=rev.next;
    }

  }
  reverse111(head){
   if(head == null){
    return null;
   } 

    let p = null;
    let c = head;
    let n = head.next;
    while(c){
      c.next=p;
      p=c;
      c=n;
      if(n){
        n=n.next;
      }
    }
    while(p){
      console.log(p.value);
      p=p.next;
  }
  }

}
let list1 = new LinkedList(1);

list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);
list1.reverse_main(list1.head);
// list1.reverse111(list1.head);
// list1.print();
