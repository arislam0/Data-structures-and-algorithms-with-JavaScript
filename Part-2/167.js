function two_sum_167(nums,target){

    let i=0;
    let j = nums.length-1;

    while (i<=j) {
        if(nums[i]+nums[j]===target){
            return [i+1,j+1];
        }
        else if(nums[i]+nums[j]>target){
            j--;
        }
        else{
            i++
        }
    }

}

console.log(two_sum_167([2,7,11,15],9));
console.log(two_sum_167([2,3,4],6));
console.log(two_sum_167([-1,0],-1));
console.log(two_sum_167([0,0,3,4],0));