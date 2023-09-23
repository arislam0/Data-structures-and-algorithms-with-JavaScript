class Node{
    constructor(value, next=null, prev=null){
        this.value = value;
        this.next = next;

        this.prev = null;
    }
}

class LinkedList{
    constructor(value){
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length=1;
    }

    append(value){
        let node = new Node(value);
        this.tail.next = node;

        node.prev = this.tail;

        this.tail = node;
        this.length++;
    }
    prepend(value){
        let node = new Node(value);
        node.next = this.head;

        this.head.prev = node;

        this.head = node;
        this.length++;
    }
    appendAt(value,position){
        if(position==1){
            this.prepend(value);
        }
        else if(position==this.length){
            this.append(value);
        }
        else{
            
            let preNode = this.findNode(position-1);
            let node = new Node(value);

            node.next = preNode.next;
            preNode.next.prev = node;
            preNode.next = node;
            node.prev = preNode;
            this.length++;
        }
    }
    findNode(position){
        let data = this.head;
        let c=1;
        while(data){
            if(c==position){
                break
            }
            c++;
            data=data.next;
        }
        return data;
    }

    print(){
        let data = this.tail;
        // let data = this.head;

        while(data){
            console.log(data.value);
            data=data.prev;
            // data=data.next;
        }

    }
    update_item(value,position){
        let updata = this.findNode(position);
      updata.value = value;
    }

    delet_item_pos(position){
        if(position==1){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
        else if(position==this.length){
            let preNode = this.findNode(position-2);

            this.tail= preNode.next;
            this.tail.next = null;
            this.length--;
        }
        else{
            let preNode = this.findNode(position-1);
            preNode.next = preNode.next.next;
            preNode.next.next.prev = preNode;

            this.length--;
        }
    }


}

let list = new LinkedList(1);

list.append(2);
list.append(3);
list.append(4);
list.prepend(4);

list.appendAt(5,1);
list.appendAt(10,6);
list.appendAt(20,3);

list.update_item(-4,5);

// list.delet_item_pos(1);
// list.delet_item_pos(8);
list.delet_item_pos(4);

list.print();