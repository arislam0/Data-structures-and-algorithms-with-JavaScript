function b_s_ceiling_flooring(nums, target){
    let start = 0;
    let end = nums.length-1;
    let mid;

    while(start<=end){
        mid=Math.floor((start+end)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return{
        ceiling: nums[mid],
        flooring: nums[mid-1]
    }
}
console.log(b_s_ceiling_flooring([10,20,30,40],25));