// let arr = [2, 4, 2, 5, 3, 4, 2, 5];

function ascii(a){
    return a.charCodeAt(0);
}

let arr = [ 'g', 'e', 'e', 'k', 's', 'f', 'o',
                   'r', 'g', 'e', 'e', 'k', 's' ];
let range = 256;
let store = Array.from(Array(range), () => 0);

for (let i = 0; i < arr.length; i++) {
  let check = arr[i];
  let f = ascii(check);
  store[f] = store[f]+1;;
}
for(let i=97; i<=122;i++){
    console.log(String.fromCharCode(i), store[i]);
}
