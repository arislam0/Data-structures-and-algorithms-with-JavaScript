class LinkedList {
  constructor(val) {
    let node = new Node(val);
    this.head = node;
    this.tail = node;
    this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print(data) {
    // let data = this.head;
    while (data) {
      console.log(data.val);
      data = data.next;
    }
  }
  random() {
    let data = this.head;

    this.tail.random = data; // 1-.7
    console.log(this.tail.random.val);
    data.random = null;
    // console.log(data.random.val);
    let tem = data.next;
    tem.random = data; //13->7
    console.log(tem.random.val);

    let tem2 = tem.next; // 13
    tem2.random = this.tail; //11->1
    console.log(tem2.random.val);

    let tem3 = tem.next;
    tem3.random = tem2; //10-.11
    console.log(tem3.random.val);
  }
  copy_23(head) {
    console.log("ji");
    let m = new Map();
    let temp = head;
    console.log("ji");

    while (temp != null) {
      let copy = new Node(temp.val);
      m[temp] = copy;
      temp = temp.next;
    }
    temp = head;
    while (temp != null) {
      m[temp].next = m[temp.next];
      m[temp].random = m[temp.random];
    }
    console.log(m[head]);
    this.print(m[head]);
  }
}
