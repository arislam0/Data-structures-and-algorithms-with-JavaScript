let obj = {};
obj.setu = "Saidur";

obj.sayHello = function () {
  console.log(this.setu);
};
console.log(obj.sayHello());

obj["lastname"] = "Rahman";
let prop = "lastname";
// console.log(obj.lastname);
console.log(obj[prop]);

let ab = {
  addr: {
    city: "sylhet",
    zip: 3100,
  },
};
ab.setu = "Saidur";
console.log(ab.addr.zip);
console.log(ab["addr"]["zip"]);

ab.sayHi = function () {
  console.log("Hello " + this.setu);
};

ab.sayHi();
