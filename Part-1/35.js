
function b_s(nums, target){
    let start = 0;
    let end = nums.length-1;
    let mid;
    mid = Math.floor((start+end)/2);
    
    while(start<end){
        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid;
        }
        mid = Math.floor((start+end)/2);
    }
    if(nums[mid]<target){
        return mid+1;
    }
    return mid;

};

console.log(b_s([1,3],0));
console.log(b_s(["c","f","j"],"a"));