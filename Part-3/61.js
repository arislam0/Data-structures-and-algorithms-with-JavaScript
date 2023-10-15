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
        if(head===null){
            return head;
        }

        let len =1;
        let newHead = head;
        let tail = head;

        while(tail.next){
            tail=tail.next;
            len++;
        }
        tail.next = head; // 5->1

         k= k%len;
        for(let i=0; i<len-k; i++){
            tail=tail.next;
        }
        newHead= tail.next;    //head->4
        tail.next = null // 3->null;

        this.print(newHead);
    }
  }
  
  let list = new LinkedList(1);
  
  list.append(2);
  list.append(3);
  
  list.append(4);
  list.append(5);

  list.rotateRight(list.head,2);
//   list.print(list.head);
  