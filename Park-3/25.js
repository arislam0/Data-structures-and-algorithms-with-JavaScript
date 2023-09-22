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
        let s= head;
        let e = head;
        let inc= k-1;

        while(inc--){
            e=e.next;
            if(e==null){
                return head;
            }
        }
        console.log(e.value);

        let rh = this.reverse_1(e.next,k); //345->435
        this.reverse_2(s,e); //12-?21
        s.next = rh;
        return e;

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
//   list.append(6);
  
list.reverseKGroup(list.head,2);


  list.print();
  