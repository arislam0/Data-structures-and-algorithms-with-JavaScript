function td_2000(word, ch){
    
    let len = word.length;
    let w = word.indexOf(ch);
    let s = word.split("");
    let i=0;

    while(i<=w){
        let tem = s[i];
        s[i] = s[w];
        s[w] = tem;
        i++;
        w--;
    }
    return s.join("");
}

console.log(td_2000("abcdefd",  "d"));
console.log(td_2000("xyxzxe",  "z"));
console.log(td_2000("abcd",  "z"));