class LRUCache {
  constructor(Capacity) {
    this.Capacity = Capacity;
    this.map = new Map();

    this.head = {}; // dummy node
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, value) {
    // console.log(this.get(key));

    const hasKey = this.get(key) !== -1;

    const isAtCapacity = this.map.size === this.Capacity;

    if (hasKey) {
      console.log(value);
      return (this.tail.prev.value = value);
    }
    if (isAtCapacity) {
      this.removeLastUsed();
    }

    const node = { key, value };
    this.map.set(key, node);

    this.moveTofront(node);
  }
  removeLastUsed() {
    const [key, next, prev] = [
      this.head.next.key,
      this.head.next.next,
      this.head,
    ];
    this.map.delete(key);
    this.head.next = next;
    this.head.next.prev = prev;
  }
  moveTofront(node) {
    const [prev, next] = [this.tail.prev, this.tail];
    this.tail.prev.next = node;
    this.connectNode(node, { prev, next });
    this.tail.prev = node;
  }
  connectNode(node, top) {
    node.prev = top.prev;
    node.next = top.next;
  }

  get(key) {
    const hasKey = this.map.has(key);
    if (!hasKey) return -1;

    const node = this.map.get(key);

    this.disconnectNode(node);
    this.moveTofront(node);

    console.log(node.value);
    return node.value;
  }

  disconnectNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
}

let lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}

lRUCache.get(1); // {2->2, 1->1}, return 1
lRUCache.put(3, 3); //  capacity = map.size, 2>2 delete, 1->1, 3->3

lRUCache.get(2); //  -1
lRUCache.put(4, 4); // 3->3, 4->4, delete 1->1

lRUCache.get(1); //-1
lRUCache.get(3); // 3->3, 4->4 => 4-4, 3-3,return 3
lRUCache.get(4); // 4->4, 3->3 => 3-3, 4-4, return 4
