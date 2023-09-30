class Node {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
}

class Linkedlist {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.lenght = 0;
    this.curr = this.tail;
  }
  visit(url) {
    // this.list.next = new Node(url);
    // this.list = this.list.next;
    // console.log(this.list.value);
    if (this.curr == this.tail) {
      let node = new Node(url);
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
      this.lenght++;
      this.curr = this.tail;

      console.log(this.tail.value);
    }
    else{
        let node = new Node(url);
        this.curr.next = node;
        node.pre = this.curr;
        this.tail = node;
        this.curr = this.tail;
        this.lenght++;
        console.log(this.tail.value);
    }
  }
  back(steps) {
    let data = this.curr;
    console.log(data.value);

    while (data) {
      if (steps == 0) {
        break;
      }
      data = data.pre;
      steps--;
    }
    if (data == null) {
      this.curr = this.head;
    } else {
      this.curr = data;
    }
    console.log(this.curr.value);
  }

  forward(steps) {
    let data = this.curr;
    console.log(data.value);

    while (data.next) {
      if (steps == 0) {
        break;
      }
      data = data.next;
      steps--;
    }
    if (data == null) {
      this.curr = this.data.pre;
    } else {
      this.curr = data;
    }
    console.log(this.curr.value);
  }
}

let list = new Linkedlist("leetcode.com");

list.visit("google.com");
list.visit("facebook.com");
list.visit("youtube.com");

list.back(1);
list.back(1);
list.forward(1);
list.visit("linkedin.com");

list.forward(2);
list.back(2);
list.back(7);
