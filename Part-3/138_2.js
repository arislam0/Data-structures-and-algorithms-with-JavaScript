class Node{
    constructor(val=null, next=null, random=null){
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

class LinkedList{

    constructor(val){
        let node = new Node(val);
        this.head = node;
        this.tail = node;
        this.length=0;
    }

    append(val){
        let node = new Node(val);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    print(data){
        // let data = this.head;
        while(data){
            console.log(data.val);
            data = data.next;
        }
    }
    random(){
        let data = this.head;

        this.tail.random = data; // 1-.7
        console.log(this.tail.random.val);
        data.random = null;
        // console.log(data.random.val);
        let tem = data.next;
        tem.random = data;  //13->7
        console.log(tem.random.val);

        let tem2 = tem.next; // 13
        tem2.random = this.tail; //11->1
        console.log(tem2.random.val);

        let tem3  = tem.next;
        tem3.random =tem2; //10-.11
        console.log(tem3.random.val);
    }

    copy_list(head){
        let tem = head;
        let n = head.next;

        while(tem){
            let copy = new Node(tem.val);

            tem.next = copy;
            copy.next = n;
            tem = n;
            
            if(n!=null){
                n=n.next;
            }
        }
    }
    handleRandom(head){
        let tem = head;
        while(tem){
            if(tem.random){
                tem.next.random = tem.random.next; 

                // b'.random = d.next = d'
                // console.log(tem.next.random.val)
            }
            tem= tem.next.next;
        }
    }
    detach(head){
        let dummy = new Node(-1);
        let tail  = dummy;
        let tem = head;

        while(tem){
            tail.next = tem.next; //-1-> 7
            console.log(tail.next.val);

            tail=tail.next; // tail =7;
            console.log(tail.val);

            tem.next=tail.next; // 7 -null

            tem = tem.next;
        }
        return dummy.next;
    }
    copy_23(head){

        if(head===null){
            return null;
        }
        this.copy_list(head);

        this.handleRandom(head);
        this.print(head);

        let r = this.detach (head);

        // this.print(r);
       
    }


}
let list = new LinkedList(7);

list.append(13);
list.append(11);
list.append(10);
list.append(1);

// list.print();

// list.print(list.head);
list.random();
list.copy_23(list.head);