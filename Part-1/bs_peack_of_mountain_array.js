function peack_of_mountain_array(nums){
    let start=0;
    let end=nums.length-1;
    let mid;
    mid=Math.floor((start+end)/2);

    while(start<end){
        // mid=Math.floor((start+end)/2);

        if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]){
            return mid;
        }
        else if(nums[mid]<nums[mid+1]){
            start=mid+1;
        }
        else{
            end=mid;
        }
        mid=Math.floor((start+end)/2);
    }
    return "ok";
}
console.log(peack_of_mountain_array([1,2,3,6,5,3,4,2]));
console.log(peack_of_mountain_array([0,1,0]));
console.log(peack_of_mountain_array([0,2,1,0]));
console.log(peack_of_mountain_array([0,10,5,2]));
console.log(peack_of_mountain_array([18,29,38,59,98,100,99,98,90]));

/*note:
  prothom number ta boro hote pare na.
*/