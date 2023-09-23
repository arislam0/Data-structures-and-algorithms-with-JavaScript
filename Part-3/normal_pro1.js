class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;

    this.length = 1;
  }
  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;

    this.length++;
  }
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  sumation(head) {
    let data = head;
    let len = this.length;
    let sum = 0;

    while (data != null) {
    //   console.log(data.value);
      sum = sum + data.value;
      data = data.next;
    }
    console.log("Sum of list is: " + sum);
  }

  max_min(data) {
    let len = this.length;
    let max = data.value;
    let min = data.value;
   
    // let data = head;

    while (data != null) {
       
        if (max < data.value) {
          max = data.value;
        }
        if (min > data.value) {
          min = data.value;
        }
        data = data.next;
      }
      console.log(max);
      console.log(min);
 }

 searchFirstAndLast(head,value){
    let index =0;
    let positionIndex = [] //2
    let data = head;

    while(data){
        if(data.value === value){
           if(positionIndex.length == 0){
             positionIndex.push(index);
           }
           else{
             positionIndex[1]=index;
           }
        }
        data=data.next;
        index++;
    }

    if(positionIndex.length ===1){
        positionIndex[1] = positionIndex[0];
    }
    return positionIndex;


 }

  
}

let list = new LinkedList(10);

list.append(20);
list.append(30);
list.append(30);
list.append(20);
list.append(20);
list.append(20);
list.append(30);
list.append(5);

// list.sumation(list.head);
// list.max_min(list.head);

console.log(list.searchFirstAndLast(list.head,20));

// list.print();
