

function isVowel(ch){
    return  ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o'
    || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O'
    || ch === 'U';
}


function td_345(s){
    let i=0;
    let j = s.length-1;
    s=s.split("");

    while(i<j){
        if(isVowel(s[i])){
            if(isVowel(s[j])){
                let tem = s[i];
                s[i] = s[j];
                s[j] = tem;
                i++;
                j--;
            }
            else{
                j--;
            }
        }
        else{
            i++;
        }
    }
    return s.join("");
}

console.log(td_345("hello"));
console.log(td_345("leetcode"));
console.log(td_345("letero"));
console.log(td_345("aA"));