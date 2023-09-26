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
  print(head = null) {
    let data = head;

    while (data) {

      console.log(data.value);

      data = data.next;

    }
  }
  reverse_ll(head){

       if(head.value === null){
            return null;
       }

       let c= head;
       let p = null;
       let n = head.next;

       while(c){
            c.next = p;
            p=c;
            console.log("p: "+p.value);
            c=n;
            if(n){
                n=n.next;
            }
       }
       this.print(p);

  }

  reverse_ll2(head){
    if(head.next == null){
        return head;
    }
    let reverseHead = this.reverse_ll2(head.next);
    head.next.next = head; //head.next 2 next->1;
    head.next = null;
    return reverseHead;
  }
  reverse_main(head){
    let rev = this.reverse_ll(head);

    while(rev){
        console.log(rev.value);
        rev=rev.next;
    }

  }
}

let list = new LinkedList(10);

list.append(20);
list.append(30);

// list.append(400);
// list.append(500);

// list.print();

// list.reverse_ll(list.head)

list.reverse_main(list.head)
// list.print(list.head);
