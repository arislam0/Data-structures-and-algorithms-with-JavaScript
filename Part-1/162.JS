function bs_162(nums){

    let len =nums.length;
    
    let start =0;
    let end = len-1;
    let mid;
    mid = Math.floor((start+end)/2);

    while(start<end){
        if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]){
            return mid;
        }
        else if(nums[mid]<nums[mid+1]){
            start=mid+1;
        }
        else{
            end=mid;
        }
        mid = Math.floor((start+end)/2);
    }
    return mid;
}

console.log(bs_162([1,2,1,3,5,6,4]))
console.log(bs_162([1]))