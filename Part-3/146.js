class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key){
        if(this.map.has(key)){
            let val = this.map.get(key);
            // console.log(this.map);
            // console.log(val);
            // console.log(key);

            //Small hack to re-order keys: 
            // we remove the requested key and place it at the end
            this.map.delete(key)
            this.map.set(key,val);
            // console.log(this.map);
            return val;
        }
        else{
            console.log(-1);
            return -1;
        }
    }
    put(key, val){

        if(this.get(key) === -1){

            // console.log(this.map.size);

            if(this.capacity === this.map.size){

                for(let keyval of this.map){
                    // console.log(keyval);
                    this.map.delete(keyval[0]);
                    break;
                }
            }
        }
        this.map.set(key,val); //1->1, 2->
    }
}
 let lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}

lRUCache.get(1);  // {2->2, 1->1}, return 1
lRUCache.put(3, 3); //  capacity = map.size, 2>2 delete, 1->1, 3->3

lRUCache.get(2); //  -1
lRUCache.put(4, 4); // 3->3, 4->4, delete 1->1

lRUCache.get(1); //-1
lRUCache.get(3);    // 3->3, 4->4 => 4-4, 3-3,return 3
lRUCache.get(4);    // 4->4, 3->3 => 3-3, 4-4, return 4