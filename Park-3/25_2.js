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

    reverse_2(s,e){
        let p=null;
        let c =s;
        let n= s.next;

        while(p!=e){
            c.next=p;
            p=c;
            c=n;
            if(n){
                n=n.next;
            }
        }
    }

    reverse_1(head,k){

        if(head == null || head.next==null || k==1){
            return head;
        }
        let dummy = new LinkedList(-1);
        dummy.next =head;

        let beforeStart = dummy;
        let e =head;
        let i=0;

        while(e!=null){
           i++;

           if(i%k==0){
            let s = beforeStart.next;
            let tem = e.next;
            this.reverse_2(s,e);

            beforeStart.next=e;
            s.next=tem;

            beforeStart = s;
            e=tem;
           
           }
           else{
            e=e.next;
           }
        }
        return dummy.next;

    }

    reverseKGroup(head,k){
        let data = this.reverse_1(head,k);

        while(data){
            console.log(data.value);
            data=data.next;
        }
    }

    
    
  }
  
  let list = new LinkedList(1);
  
  list.append(2);
  list.append(3);
  
  list.append(4);
  list.append(5);
  list.append(6);
  
  list.reverseKGroup(list.head,2);
  list.print();
  