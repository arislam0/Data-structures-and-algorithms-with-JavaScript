/* 
number method: Number(): parseInt(), parseFloat().
.toFixed(), toPrecision(), toString(), toExponetial, valueOf(), isFinite(), isInteger()

Math object:

*/
 //car: property-information(color, brandName, year), Method-(drive(), moveRight);

let num = 50;
console.log(typeof num.toString());

let num2 = 4.6566556434554E+10;
console.log(num2.toFixed(3));

console.log(parseInt(num2));

console.log((54-658).valueOf());

console.log(Math.PI);
console.log(Math.PI.toFixed(4));
console.log(Math.PI.toFixed(4).length);

console.log(Math.max(3,4,4,53, 44));

let num3 = parseInt(Math.random()*100);
console.log(num3);
