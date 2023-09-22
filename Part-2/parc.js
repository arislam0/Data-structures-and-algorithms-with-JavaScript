function td_1768(word1, word2){
    let result = '';

    let k = Math.max(word1.length, word2.length);
    console.log(k);

    for(let i=0; i<k; i++){
        if(i<word1.length){
            result = result + word1[i];
            // console.log(result);
        }
        if(i<word2.length){
            result = result + word2[i];
        }
    }
    return result;
}

console.log( td_1768( "abc", "pqr"));
console.log( td_1768( "ab", "pqrs"));
console.log( td_1768(  "abcd", "pq"));