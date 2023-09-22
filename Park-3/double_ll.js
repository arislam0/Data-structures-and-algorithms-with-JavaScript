class Node{
    constructor(value, next=null, prev=null){
        this.value =value;
        this.next = next;
        this.prev = null;
        // this.index = index;
    }
}
class LinkedList{

    constructor(value){
        let node = new Node(value); //{value: 100, next: null, prev:null}
        this.head = node;
        this.tail = node;
    

        this.length = 1;
    }
    append(value){
        // 1. node create
        // 2. tail.next append
        // 3. update tail

        let node = new Node(value);
        this.tail.next = node;

        node.prev = this.tail;

        this.tail = node;
        this.length++;
    }
    prepend(value){
        let node =  new Node(value,this.head);

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

        this.length++;
    }

    print(){
        let data = this.tail;
        let len = this.length;

        while(len>0) {
            console.log(data.value);
            data = data.prev;
            len--;
        }
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

            newNode.next = preNode.next;
            preNode.next.prev = newNode; //20 10 <=> 20

            preNode.next = newNode; //10 <=> 30
            newNode.prev = preNode;
            
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
           this.head.prev = null;
           this.length--;
           
        }
        else if(position === this.length){
            preNode = this.findNode(position-2);
            
            this.tail = preNode.next; //t=>pre
            this.tail.next= null;  // pre->null

            this.length--;

        }
        else{
            preNode = this.findNode(position-1);
            preNode.next = preNode.next.next;
            preNode.next.next.prev = preNode; 
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

list.appendAt(60,1);
list.appendAt(160,5);
list.appendAt(1550,2);

list.update_data(2, -998);

list.delete_item(1);
list.delete_item(5);
list.delete_item(2);

list.print();



// console.log(list.head);
// console.log(list.tail);



