

function b_s(nums, target){

    let len = nums.length;

    let mid;
    let start =0;
    let end = len-1;

    while(start<=end){
        mid = Math.floor((start+end)/2);

        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]<target){
            start = mid +1;
        }
        else{
            end = mid-1;
        }
    }
    return "-1";
}

console.log(b_s([-1,0,3,5,9,12],9));