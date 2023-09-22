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
    Delete_Node(node){
    
        // let tem = node.next.value; //1
        // node.value = tem; //5->1
        // node.next= node.next.next;//1>.9
        
        [node.value, node.next] = [node.next.value, node.next.next];

     
    }
    

}
let list1 = new LinkedList(4);

list1.append(5);
list1.append(1);
list1.append(9);
// list1.print();

list1.Delete_Node(list1.head.next);
list1.print();

