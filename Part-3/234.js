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


    reverse_list(head){
        if(head==null){
            return null;
        }
        let p=null;
        let c=head;
        let n= head.next;

        while(c!=null){
            c.next=p;
            p=c;
            c=n;
            if(n!==null){
                n=n.next;
            }
        }
        return p;
    }

    palindrome_lineked_list(head){

        let slow = head;
        let fast = head;

        // mid value find
        while(fast.next !=null && fast.next.next != null){
            slow= slow.next;
            fast= fast.next.next;
        }
        // reverse part of list 12->21
        slow.next = this.reverse_list(slow.next);

        // comparision reverse or non reverse list
        let start = head;
        let mid = slow.next;

        while(mid!=null){

            if(mid.value != start.value){
                // reverse again list
                slow.next = this.reverse_list(slow.next);
                console.log(false);
                return false
            }
            start=start.next;
            mid= mid.next;
        }
        this.print();
         // reverse again list
        slow.next = this.reverse_list(slow.next);
        return true;

    }


}
let list1 = new LinkedList(1);

list1.append(2);
list1.append(2);
list1.append(1);

list1.palindrome_lineked_list(list1.head);

list1.print();