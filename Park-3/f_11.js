class Node{
    constructor(value,next=null){
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
    reverse2(s,e){
        let p=null;
        let c=s;
        let n=s.next;
        while(p != e){
            c.next = p;
            p=c;
            c=n;
            if(n){
                n=n.next;
            }
        }
    }
    reverse1(head,k){
        if(head == null || head.next == null || k==1){
            return head;
        }
        let s=head;
        let e = head;
        let inc = k-1;
        while(inc--){
            e=e.next;
            if(e==null){
                // console.log("hi");
                return head;
            }
        }
        let nextHead =  this.reverse1(e.next,k); //435
       this.reverse2(s,e); //21
       s.next = nextHead;
       return e;
    }
  
    reverse_k_groups(head,k){
      
        let data = this.reverse1(head,k);

        while(data){
            console.log(data.value);
            data=data.next;
        }

  
    }
  
  
  }
  let list1 = new LinkedList(1);
  
  list1.append(2);
  list1.append(3);
  list1.append(4);
  list1.append(5);
  
  list1.reverse_k_groups(list1.head,6);

  list1.print();
  