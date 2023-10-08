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
    copy_23(head){

        const cloneMap = new Map();

        const falseHead = new Node(0,head,null);
        const  falseHeadClone = new Node(0,null,null);

        let p = falseHead;
        let pClone = falseHeadClone;

        while(p.next!==null){

            const clone = new Node(p.next.val,null,null); // node create
            console.log(clone.val);
            console.log(p.next);

            cloneMap.set(p.next,clone); // append map
            pClone.next = clone; // update pClone = clone

            p = p.next;
            pClone = pClone.next;
        }
        p= falseHead;
        pClone = falseHeadClone;

        while(p.next!==null){

            const clone = cloneMap.get(p.next); // get p.next
            console.log(clone.val);

            clone.random = cloneMap.get(p.next.random); // random set korichi
            // console.log(clone.random);
            
            p = p.next;
            pClone = pClone.next;
        }
        
        this.print(falseHeadClone.next);
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