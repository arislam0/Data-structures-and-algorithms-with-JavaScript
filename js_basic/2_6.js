let str = "Programming Fundamentals with JS Bangladeshr";

console.log(str.length);

console.log(str.indexOf('r'));
console.log(str.indexOf('r',2 ));
console.log(str.lastIndexOf('r'));
console.log(str[1]);

let good = "Mohammed Ariful Islam";

console.log(good.slice(0,8));
console.log(good.slice(8,13));
console.log(good.slice(6));

console.log(good.substr(9,6));
console.log(good.replace('Ariful','Ar'));
console.log(good.toUpperCase());

let g1 = ' ar islam '
console.log(g1.trim());
console.log(str.concat(' ',g1));