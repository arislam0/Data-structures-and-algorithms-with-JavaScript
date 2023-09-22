function td_1768(word1, word2){

    let w1 = word1.split("");
    let w2 = word2.split("");

    let len1 = w1.length;
    let len2 = w2.length;
    let len  = len1 + len2;
    let res = [];
    let i=0;
    let j=0;

    for(let k=0; k<len; k++){

        if( (k%2===0 && i<len1) || j>=len2){
            res[k] = w1[i];
            i++;
        }
        else if( (k%2===1 && j<len2) || i>=len1){
            res[k] = w2[j];
            j++;
        }
    }
    return res.join("");

}

console.log( td_1768( "abc", "pqr"));
console.log( td_1768( "ab", "pqrs"));
console.log( td_1768(  "abcd", "pq"));