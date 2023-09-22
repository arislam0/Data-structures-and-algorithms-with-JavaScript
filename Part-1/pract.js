
var citations = [1,1];

var hIndex = function(c) {
    let n=c.length;

    for(let i=0; i<n; i++) { 
        console.log(c[i]);
        console.log(n-i);
        if(c[i]>=n-i) 
            console.log(n-i);
            return n-i; 
     }
    return 0; 
};    

console.log(hIndex(citations));