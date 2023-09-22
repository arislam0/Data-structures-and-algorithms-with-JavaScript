let obj = {
  name: "ar",
  addr: "sylhet",
  sayHello: function () {
    console.log("hello");
  },
};

delete obj.addr;
// delete obj.sayHello;
console.log(obj);

// console.log(obj.lenght); 
// console.log(Object(obj).lenght);

// how to get object length

Object.size = function(obj){
    var size =0;
    let key;
    for (key in obj){
        if(obj.hasOwnProperty(key)) size++;
    }
    return size;
};
console.log(Object.size(obj));