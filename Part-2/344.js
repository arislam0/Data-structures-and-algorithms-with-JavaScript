
function TD_344(nums){

    let i= 0;
    let j = nums.length-1;
    let res = [];

    while(i<=j){
        let tem = nums[i];
        nums[i] = nums[j];
        nums[j] = tem;
        i++;
        j--;
    }
    return nums;

}

console.log(TD_344(["h","e","l","l","o"]));
console.log(TD_344(["H","a","n","n","a","h"]));
