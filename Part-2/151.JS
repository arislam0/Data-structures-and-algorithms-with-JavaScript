
function td_151(str){

    str =str.replace(/[^0-9a-zA-Z]/g," ");
    str=str.trim();
    str=str.split(" ");
    
    let s = [];
    let m =0;

    for(let k=0; k<str.length; k++){
        if( str[k] ===  ''){
            continue;
        }
        s[m] = str[k];
        m++;
    }

    let i=0;
    let j = s.length-1;
    
    while(i<=j){
        let tem = s[i];
        s[i] = s[j];
        s[j] = tem;
        i++;
        j--;
    }
    return s.join(" ");


}

console.log(td_151("the sky is blue"));
console.log(td_151("  hello world  "));
console.log(td_151("a good   example"));