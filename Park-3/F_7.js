class MyHashSet {
    constructor (){
        // this.set = [];
        this.set = {};
    }
 }
 
 MyHashSet.prototype.add = function(key) {
     this.set[key] = true;
 };
 
 MyHashSet.prototype.remove = function(key) {
     delete this.set[key];
     
 };
 
 MyHashSet.prototype.contains = function(key) {
     return this.set[key]?true:false;
 };

//  MyHashSet.prototype.print = function(){
//     console.log(...this.set);
// };
 
let  myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
myHashSet.print(); // return False, (already removed)
 