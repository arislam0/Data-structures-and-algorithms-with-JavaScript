class MyHashMap {

    constructor(){
        this.arr =[];  
    }

    put(key,value){
            this.arr[key] = [key,value];
    }
    get(key){
        return this.arr[key]?this.arr[key][1]:-1;
    }

    remove(key){
        delete this.arr[key];
    }
}

let hp = new MyHashMap ();
console.log(hp.put(1,1));
console.log(hp.put(2,2));

console.log(hp.get(1));
console.log(hp.get(3));

console.log(hp.put(2,1));
console.log(hp.put(2,1));

console.log(hp.get(2));

console.log(hp.remove(2));

console.log(hp.get(2));

// hp.print();

// else {
//     for(let i=0; i<this.arr.length;i++){
//         for(let j=1; j<this.arr.length[-])
//     }
// }