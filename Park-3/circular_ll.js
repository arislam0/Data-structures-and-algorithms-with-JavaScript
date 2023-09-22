class Node{
    constructor(value, next=null){
        this.value =value;
        this.next = next;
    }
}
class LinkedList{

    constructor(value){
        let node = new Node(value); //{value: 100, next: null}
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;

        this.length = 1;
    }
    append(value){
        // 1. node create
        // 2. tail.next append
        // 3. update tail

        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.tail.next = this.head;

        this.length++;
    }
    prepend(value){
        let node =  new Node(value,this.head);
        // node.next =  this.head;
        this.head = node;
        this.tail.next = this.head;

        this.length++;
    }

    print(){
        let data = this.head;
        let len = this.length;
        
        while(len+1>0) {
            console.log(data.value);
            data = data.next;
            len--;
        }
        // console.log(data.value);
    }

    appendAt(value, position){

        if(position ===1 ){ //1st
            this.prepend(value);
        }
        else if(position === this.length+1){ //last
            this.append(value);
        }
        else{
            let newNode = new Node(value);
            let preNode = this.findNode(position-1);
            // console.log({preNode: preNode.value});

            newNode.next = preNode.next
            preNode.next = newNode;
            this.length++;
        }
    }
    findNode(n){
        let count =1;
        let data = this.head;

        while(data){
            if(count == n){
                break;
            }
            count++;
            data = data.next;
        }
        return data;
    }

    delete_item(position){
       
        let preNode;
        if(position === 1){
            preNode = this.findNode(position);

           this.head = preNode.next;
           this.tail.next = preNode.next;
           this.length--;
           
        }
        else if(position === this.length){
            preNode = this.findNode(position-2);
            
            this.tail = preNode;
            this.tail.next = this.head;
            this.length--;

        }
        else{
            preNode = this.findNode(position-1);
            preNode.next = preNode.next.next;
            this.length--;
        }
       
    }
    update_data(position,value){
        
       let node = this.find_Value(position);
       node.value = value;
    }

    find_Value(n){
       let count =1;
        let data = this.head; 

        while(data){
            if(count == n){
                break;
            }
            count++;
            data = data.next;
        }
        return data;
    }


}

let list = new LinkedList(100);
list.append(200);

list.prepend(50);
list.prepend(60);

list.appendAt(70,1);
list.appendAt(170,6);
list.appendAt(-170,3);

list.update_data(4,887);

list.print();

list.delete_item(1);
list.delete_item(6);
list.delete_item(3);
console.log("delet:  ");
list.print();