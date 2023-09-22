
var citations = [0,1,3,5,6];

var hIndex = function(citations) {
    var store = [];
    let len = citations.length;

    if(len===1){
        if(citations[0]){
            return 1;
        }
        else{
            return 0;
        }
    }
    if(citations[len-1]===1){
        return 1;
    }

    for (let i = 0; i < len; i++) {
    let m = citations[i];
    let flag = 0;
    for (let j = i; j < len; j++) {
      if (citations[i] >= m && m!=0 && m!=1) {
        flag++;
      }
    }
    store[i]=(flag>=m?m:flag);
  }
   return  Math.max(...store);
   
};

console.log(hIndex(citations));