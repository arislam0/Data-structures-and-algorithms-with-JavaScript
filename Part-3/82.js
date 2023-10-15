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
    removeDuplicates(tem){
        let dummy = new LinkedList(0);
        dummy.next = tem;
        let pre=dummy;

        while(tem){

             if(tem.next !== null && tem.value === tem.next.value){

                while(tem.next !== null && tem.value === tem.next.value){
                    tem=tem.next;
                }
                pre.next= tem.next;
            }
            else{
                console.log(pre.value);
                pre=pre.next;
            }
            tem=tem.next;
        }
        this.print(dummy.next);
    }

    
  }
  
  let list = new LinkedList(1);
  
  list.append(2);
  list.append(3);
  
  list.append(3);
  list.append(4);
  list.append(4);
  list.append(5);

  list.removeDuplicates(list.head);
//   list.print();
  