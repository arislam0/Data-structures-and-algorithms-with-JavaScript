function bs_nc(nums,target){
    let len = nums.length;
    let start=0;
    let end = len-1;
    let mid;
    let nc=0;

    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(nums[mid]===target){
            let i=mid;
            let j=mid;
            while(nums[i]===target){
                nc= nc+1;
                i++;
            }
            while(nums[j]===target){
                nc=nc+1;
                j--;
            }
            return nc-1;

        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1;
}

console.log(bs_nc([2,3,4,4,5,5,5,6,6,6,6,6,6,6,9],6));