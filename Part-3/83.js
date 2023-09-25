class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    let node = new Node(val);
    this.head = node;
    this.tail = node;
    this.length = 0;
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
   removeDuplicates(head){

        if(head == null || head.next == null){
            return head;
        }
        let newHead = this.removeDuplicates(head.next);
        console.log(newHead.val);

        if(head.val == newHead.val){
            return newHead;
        }
        else{
            head.next = newHead;
            return head;
        }
   }

   removeDuplicates_ita(head){

        if(head == null || head.next==null){
            return head;
        }
        let tem = head;
        while(tem.next != null){

            if(tem.val == tem.next.val){
                let del = tem.next;
                tem.next = del.next;
            }
            else{
                tem=tem.next;
            }
        }
     return head;

   }


}

let list = new LinkedList(1);
list.append(1);
list.append(2);
list.append(3);
list.append(3);

// list.removeDuplicates(list.head);
list.removeDuplicates_ita(list.head);

list.print();
