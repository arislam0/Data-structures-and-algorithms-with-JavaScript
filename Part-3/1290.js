// 2 pointer
// slow, fast

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
    prepend(value) {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  
    print() {
      let data = this.head;
      let c = 0;
      while (data) {
        c++;
        console.log(c + ": " + data.value);
        data = data.next;
      }
    }
  

  binary_number(head){
      let n=0;
      let tem = head;
      while(tem){
        n++;
        tem=tem.next;
      }
      tem = head;
      let sum=0;
      while(tem){
        sum=sum + Math.pow(2,n-1)*tem.value;
        // console.log(sum);
        tem=tem.next;
        n--;
      }
      console.log(sum);
  }
  
  }
  
  let list = new LinkedList(1);
  
  list.append(1);
  list.append(1);
  // list.append(0);
  // list.append(4);
  // list.append(5);
  
  
  list.binary_number(list.head);
  