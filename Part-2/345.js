
function td_345(s){
    let j = s.length;
    let w = s.split("");
    let i=0;
    let res = []
    let k=0;

    while(i<j){
        let tem = s[i].toLowerCase();
        if(tem ==="a" || tem ==="e" || tem === "i" 
        || tem ==="o" || tem ==="u"){
            res[k] = i;
            k++;
        }
        i++;
    }
    let n = res.length-1;
    i=0;
    while(i<=n){
        let a = res[i];
        let b = res[n];
        let tem = w[a];
        w[a]= w[b];
        w[b] = tem;
        i++;
        n--;
    }
   return w.join("");
}

console.log(td_345("hello"));
console.log(td_345("leetcode"));
console.log(td_345("letero"));
console.log(td_345("aA"));