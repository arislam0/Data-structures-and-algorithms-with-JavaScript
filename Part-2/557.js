function td_557(s){

    let str = s.split(" ");
    let len = str.length;
  
    for(let i=0; i<len; i++){
        let tem = str[i].split('');
        let rev = tem.reverse();
        str[i] = rev.join("");
    }
     return str.join(" ")
    
}

console.log(td_557("Let's take LeetCode contest"));
console.log(td_557("God Ding"));