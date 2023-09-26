
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
  print(){
      let data = this.head;

      while(data){
          console.log(data.value);
          data=data.next;
      }
  }

  cycle(data,data1) {
    // let data = this.head;
    // console.log(data.value);
    // console.log(data1.value);
    let c = 1;

    while (data) {
      if (c == 3) {
        //   console.log(data.val);
        break;
      }
      c++;
      data = data.next;
    }
    // console.log(data.value);

    let pre = data1;
    while (data1) {
      pre = data1;
      data1 = data1.next;
    }

    console.log(pre.value);
    pre.next = data;
    console.log(pre.next.value);
  }

  getInteger(headA, headB){

    let a = headA;
    let b = headB;

      while(a != b){
        if(a == null){
          a= headB;
        }
        else{
          console.log(a.value);
          a=a.next;
        }

        if(b==null){
          b= headA;
        }
        else{
          console.log(b.value);
          b=b.next;
        }
      }
      console.log(a.value);
  }


}
  

let list = new LinkedList(4);
list.append(1);
list.append(8);
list.append(4);
list.append(5);
// list.print();

  let list1 = new LinkedList(5);
  list1.append(6);
  list1.append(1);
  // list1.print();

  list.cycle(list.head,list1.head);
  //  list1.print();
  list.getInteger(list.head,list1.head);

  // list.print(list.head);

//   list.LinkedList_Cycle(list.head, list);
