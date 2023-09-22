
function missing_number(nums){
    let len = nums.length;
    let sum=0;

    for(let i=0; i<len;i++){
        sum = sum + nums[i];
    }
    let sum2 = (len*(len+1))/2;
    let r = sum2-sum;
    return r;
}
console.log(missing_number([1,0,3,4,5]))