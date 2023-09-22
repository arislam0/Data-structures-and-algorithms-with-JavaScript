function bs_244(nums,target){

    let len= nums.length-1;

    let start=0;
    let end = len;
    let mid = Math.floor((start+end)/2);

    while(start<end){
        // mid = Math.floor((start+end)/2);
        if(nums[mid]===target){
            for(let i=mid; i<=len; i++){
                if(nums[i]!=target){
                    return nums[i];
                }
            }
            return nums[mid+1]===target?nums[0]:nums[mid+1];
        }
        else if(nums[mid]<target){
            start = mid+1;
        }
        else{
            end = mid;
        }
        mid = Math.floor((start+end)/2);
    }

    if(mid===len && nums[mid]>target){
        return nums[mid];
    }
    else if(mid===len && nums[mid]<=target){
        return nums[0]
    }
    else{
        return  nums[mid];
    }
}

console.log(bs_244(["e","e","e","e","e","e","n","n","n","n"],"e"));
console.log(bs_244(["e","e","e","k","q","q","q","v","v","y"],"q"))
console.log(bs_244(["e","e","g","g"],"g"))

console.log(bs_244(["c","f","j"],"j"))
console.log(bs_244(["c","f","j"],"a"));
console.log(bs_244(["c","f","j"],"c"));
console.log(bs_244(["x","x","y","y"],"z"));