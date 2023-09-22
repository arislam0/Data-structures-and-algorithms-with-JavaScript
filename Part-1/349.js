function bs_349(nums1, nums2){
 
    let len1= nums1.length;
    let len2= nums2.length;
    let arr = [];
    // let flag=0;

    if(len1===1 && len2===1){
        return [1];
    }

    for(let i=0; i<len1; i++){
        
        for(let j=0; j<len2; j++){
            if(nums1[i]===nums2[j]){
                arr.push(nums1[i]);
                break;
            }
        }
    }
    let res =[];
   
    for( const value of arr){
        if(!res.includes(value)){
            res.push(value);
        }
    }
    return res;
}

console.log(bs_349([1,2,2,1], [2,2]));
console.log(bs_349([4,9,5], [9,4,9,8,4]));
console.log(bs_349([1],[1]));

console.log(bs_349([1,2],[2,1]));
