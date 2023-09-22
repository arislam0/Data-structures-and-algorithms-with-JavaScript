// head............tail
// (100,2k)---->(200,3k) ---->(300,null)
//1k,  2k       3k


// linkedList
// Head{
//     value: 100,
//     next: {
//         value:200,{
//             next: {
//                 value: 300,
//                 next: null
//             }
//         }
//     }
// }

class Node{
    constructor(value, next=null){
        this.value =value;
        this.next = next;
    }
}
class LinkedList{

    constructor(value){
        let node = new Node(value);
        this.head = node;
        this.tail = node;
    }
    append(value){
        // 1. node create
        // 2. tail.next append
        // 3. update tail

        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
    }
    prepend(value){
        let node =  new Node(value,this.head);
        // node.next =  this.head;
        this.head = node;
    }

    print(){
        let data = this.head;
        
        while(data != null) {
            console.log(data.value);
            data = data.next;
        }

    }

}
let list = new LinkedList(100);
list.append(200);
list.append(400);
list.append(300); 
list.prepend(-1);
// console.log(list);
// console.log(list.head);
// console.log(list.tail);

list.print();