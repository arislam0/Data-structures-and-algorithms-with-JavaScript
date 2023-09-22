function bs_349(nums1,nums2){

    let set = new Set(nums1);
    let result = new Set();

    for(let i=0; i<nums2.length; i++) {
        if(set.has(nums2[i])) 
        {
            result.add(nums2[i]);
        }
    }
    return Array.from(result);
}

console.log(bs_349([1,2,2,1], [2,2]));
console.log(bs_349([4,9,5], [9,4,9,8,4]));
console.log(bs_349([1],[1]));

console.log(bs_349([1,2],[2,1]));

