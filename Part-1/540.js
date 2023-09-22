function bs_378(nums){
    let len = nums.length;

    if(len===1 || nums[0] !== nums[1]){
        return nums[0];
    }
    else if(nums[len-1] !== nums[len-2]){
        return nums[len-1];
    }

    let left =0;
    let right=len-1;
    let mid;
    // mid = Math.floor((left+right)/2);

    while(left<=right){
        mid = Math.floor((left+right)/2);
        
        if( (nums[mid]!==nums[mid+1]) && (nums[mid]!==nums[mid-1]))  {
            return nums[mid];
        }
        else if(nums[mid] === nums[mid-1]  ){
            let c= mid-left+1;

            if(c%2===0){
                left=mid+1;
            }
            else{
                right=mid-2;
            }
        }
        else if(nums[mid]===nums[mid+1]){
            let c= right-mid+1;

            if(c%2===0){
                right=mid-1;
            }
            else{
                left=mid+2;
            }
        }
        // mid = Math.floor((left+right)/2);
    }
}

console.log(bs_378([1,1,2,3,3,4,4,8,8]));

console.log(bs_378([3,3,7,7,10,11,11]));

console.log(bs_378([1,1,2]));

console.log(bs_378([1]));
console.log(bs_378([7,7,10,11,11,12,12]));

console.log(bs_378([1,1,2,2,3]));


