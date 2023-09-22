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
    
    binartodec(head){

        let data = head;
        let ans =0;
        while(data){
            ans=ans*2;
            console.log(ans);
            ans=ans+data.value;
            console.log(ans);
            data=data.next;
        }
        console.log(ans);
      
    }

    

}
let list1 = new LinkedList(1);

list1.append(1);
list1.append(1);
list1.append(1);
list1.append(1);
// list1.append(9);
// list1.append(9);
// list.print();

list1.binartodec(list1.head);
list1.print();

