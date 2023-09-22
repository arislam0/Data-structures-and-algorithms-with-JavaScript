
function flipping_image_832(nums){

    let len = nums.length;

    for(let i=0; i<len; i++){
        let k = nums[i].length-1;
        let j=0;
        
        while(j<=k){
            let tem = nums[i][j];
            nums[i][j] = nums[i][k]^1;
            nums[i][k] = tem^1;
            j++;
            k--;
        }

    }
    return nums;
}
console.log(flipping_image_832([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipping_image_832([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));

