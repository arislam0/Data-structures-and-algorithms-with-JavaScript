class MyHashSet {

    constructor() {
      this.arr = [];
    }

    print(){
        for(let i=0; i<this.arr.length; i++){
            console.log(this.arr[i]);
        }
    }
  
    add (key) {
          if(this.arr.length === 0){
              this.arr.push(key);
          }
          else{
              for(let i=0; i<this.arr.length;i++){
              if(this.arr[i] ===  key){
                  return;
              }
          }
          this.arr.push(key);
          }
  }
  
  remove(key) {
      if(this.arr.length === 0){
          return;
      }
      if(this.arr[0] === key){
          this.arr.shift();
      }
      else if(this.arr[this.arr.length-1] === key){
          this.arr.pop();
      }
      else{
          for(let i=1; i<this.arr.length-1; i++){
              if(this.arr[i] === key){
                  for(let j=i; j<this.arr.length-1; j++){
                      this.arr[j] = this.arr[j+1];
                  }
                  this.arr.pop();
                  return;
              }
          }
      }
  }
  
  contains (key) {
     for(let i=0; i<this.arr.length; i++){
      if(this.arr[i] === key){
          return true;
      }
     }
      return false;
  }
  
  }

let myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
myHashSet. print();
 
  
  
  
  
  