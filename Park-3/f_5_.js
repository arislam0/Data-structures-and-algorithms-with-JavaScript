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
    
    middleNode(head){

        let n=0;
        let tem = head;

        while(tem){
            n++;
            tem= tem.next;
        }
        let half = Math.floor(n/2);
        tem = head;

        while(half--){
            tem=tem.next;
        }
        console.log(tem.value);
    }

    middleNode1(head){

        let fast= head;
        let slow = head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        console.log(slow.value);
    }

}
let list1 = new LinkedList(4);

list1.append(5);
list1.append(2);
list1.append(9);
list1.append(9);
// list.print();

list1.middleNode(list1.head);
list1.middleNode1(list1.head);
list1.print();

