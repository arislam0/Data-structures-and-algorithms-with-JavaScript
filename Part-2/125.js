function td_125(s){

    s = s.toLowerCase();                                              

    s = s.split("");
    let j = s.length;
    let k=0;
    let str = [];
    let m=0;

    for(let i=0; i<j; i++){
        if( ((s[i]>="a" && s[i]<="z"))|| (s[i]>="0" && s[i]<=9) )
        {
            str[m]=s[i];
            m++;
        }
    }
    console.log(str);
    m=m-1;

    while(k<=m) {
        if(str[k] !== str[m]){
            return false;
        }
        k++;
        m--;
    }
    return true;
    
}

console.log(td_125("A man, a plan, a canal: Panama"));
console.log(td_125("race a car"));
console.log(td_125(" "));
console.log(td_125("ab@a"));
console.log(td_125("ab_a"));
console.log(td_125("Marge, let's \"[went].\" I await {news} telegram."));