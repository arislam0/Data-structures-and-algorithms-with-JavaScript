
function td_151(s){
   

    // console.log(s.match(/\w+/gi).reverse().join(" "));

    let res = [];
    s = s.split(" ").reverse();
    

    s.filter(e=> {
        
        if(e.length >=1){
            res.push(e);
        }
    })


   

    return res.join(" ");


}

// console.log(td_151("the sky is blue"));
console.log(td_151("  hello world  "));
// console.log(td_151("a good   example"));