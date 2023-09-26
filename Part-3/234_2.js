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



    palindrome_lineked_list(head){

        let palindrom = [];
        while(head){
            palindrom.push(head.value);
            head= head.next;
        }

        let i=0;
        let j=palindrom.length-1;

        while(i<j){
            if(palindrom[i]!==palindrom[j]){
                console.log("f");
                    return false;
            }
            i++;
            j--;
        }
        console.log("t");
        return true;
    }


}
let list1 = new LinkedList(1);

list1.append(2);
list1.append(2);
list1.append(1);

list1.palindrome_lineked_list(list1.head);

list1.print();