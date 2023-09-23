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
        let data = this.head.next;

        while(data){
            console.log(data.value);
            data=data.next;
        }
    }

    merge_two_sorted_list(l1,l2){

        if(l1 == null){
            return l2;
        }
        if(l2 == null ){
            return l1;

        }
        if(l1.value<l2.value){
            
            l1.next = this.merge_two_sorted_list(l1.next,l2);
            return l1;
        }
        else{
            
            l2.next = this.merge_two_sorted_list(l1,l2.next);
            return l2;
        }

    }
    merge_iterative(l1,l2){
      
       let curr = new LinkedList();
       const dummy =curr;
        // console.log(dummy.value)

       while(l1 && l2){

        if(l1.value < l2.value){
            console.log(l1.value);
            curr.next = l1;
            l1 = l1.next;
        }
        else{
            console.log(l2.value)
            curr.next=l2;
            l2=l2.next;
        }
        curr=curr.next;
       }

       curr.next = l1 || l2;

       let data =dummy.next;

       while(data) {
        console.log(data.value);
        data=data.next;
    }
       
    }

}
let list1 = new LinkedList(1);

list1.append(2);
list1.append(4);
// list1.print();

let list2 = new LinkedList(1);

list2.append(3);
list2.append(5);
// list2.print();

// list2.merge_two_sorted_list(list1.head,list2.head);

list2.merge_iterative(list1.head,list2.head);

// list2.print();