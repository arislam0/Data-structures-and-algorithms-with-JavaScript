let obj = {
    name: 'ar',
    addr: 'syl',
    age: 45,
};

// object,key()->array
// console.log(Object.keys(obj));

for (let el of Object.keys(obj)){
    console.log(obj[el]);
}

// abject.values()->array
// console.log(Object.values(obj));

//abject.entries()->array
console.log(Object.entries(obj));

//for ... in 
for (let el in obj){
    console.log(obj[el]);
}