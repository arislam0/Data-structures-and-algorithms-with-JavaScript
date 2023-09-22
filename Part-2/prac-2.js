function td_557(s){

   return s.split(" ").
   map(word => word.split("").reverse().join(""))
   .join(" ");
    
}

console.log(td_557("Let's take LeetCode contest"));
console.log(td_557("God Ding"));