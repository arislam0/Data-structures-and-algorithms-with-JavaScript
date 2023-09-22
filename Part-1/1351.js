function bs_1351(grid){
    let lent = grid.length;
    let result = 0;

    for(let i=0; i<lent; i++){
        let nums = grid[i];
        let len = nums.length;

        for(let j=0; j<len; j++){
            if(nums[j]<0){
                // result=result+1;
                result=result+nums.length-j;
                break;
            }
        }
    }
    return result;
}

console.log(bs_1351([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
console.log(bs_1351([[3,2],[1,0]]));