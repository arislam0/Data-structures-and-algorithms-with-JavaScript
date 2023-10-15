

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
    rotateRight(head,k){
        if(!head || !head.next)return head;
        let pointer=head;
        let prevNode=null;
        let count=1;
        while(pointer.next){
            prevNode=pointer;
            pointer=pointer.next;
            count++;
        }
        k=k%count;
        if(k===0){
            return head;
        }
        prevNode.next=null;
        pointer.next=head;
        head=pointer;
        return this.rotateRight(head,k-1);
    }
  }
  
  let list = new LinkedList(1);
  
  list.append(2);
  list.append(3);
  
  list.append(4);
  list.append(5);

  list.rotateRight(list.head,2);
  list.print(list.head);
  