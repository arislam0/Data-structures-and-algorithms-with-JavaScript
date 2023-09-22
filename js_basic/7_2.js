//define
function sayHello(){
    console.log('Hello');
}
//invoke
sayHello();

const sayHello2 = function(){
    console.log("say hello again");
}

sayHello2();
console.log(sayHello2);

function adder(a, b){
    console.log(a+b);
}
const x =adder(5,10);
console.log(x); // video 4

const minus = (a,b)=>{
    console.log(a-b);
}
minus(10,5);

