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
  
      this.lenght = 1;
    }

    append(value) {
      let node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.lenght++;
    }

    print() {
      let data = this.head;
  
      while (data) {
  
        console.log(data.value);
  
        data = data.next;
  
      }
    }
    nextLargeNodes(head) {
      let result = [];
      let stack = [];
      let index = 0;
  
      while (head) {
        result[index] = 0;

        while (stack.length > 0 && head.value > 
          stack[stack.length - 1].value) {
          result[stack.pop().index] = head.value;
          // console.log(result);
        }

        stack.push({ value: head.value, index: index });
        head = head.next;
        index++;
      }
      console.log(result);
    }
    
  }
  
  let list = new LinkedList(4);
  
  list.append(3);
  list.append(2);
  list.append(5);
  // list.append(5);
  
list.nextLargeNodes(list.head);


//   list.print();
  