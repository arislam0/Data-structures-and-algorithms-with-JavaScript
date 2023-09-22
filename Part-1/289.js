
function sort11(nums){
    len = nums.length;
    for(let i=0; i<len-1; i++){
      for(let j=0; j<len-i-1; j++){
          if(nums[j]>nums[j+1]){
              let tem = nums[j];
              nums[j]=nums[j+1];
              nums[j+1]=tem;
          }
      }
    }
    return nums;
  }
function bs_289(nums1, target) {

 let nums =[];
 nums = sort11(nums1);

  let end=nums.length-1;
  let start=0;
  let mid;
  let r =[];
  let xx=0;

  while(start<=end){
    mid = Math.floor((start+end)/2);

    if(nums[mid]===target){

        let i = mid-1;
        let j =mid;

        while(nums[i]===target){
            r[xx] = i;
            i--;
            xx++;
        }
        while(nums[j]===target){
            r[xx] = j;
            j++;
            xx++;
        }
        result = sort11(r);
        console.log(result);
        return result;
    }
    else if(nums[mid]<target){
        start=start+1;
    }
    else{
        end=end-1;
    }
  }
  return r;

}



console.log(bs_289([1, 2, 5, 2, 3], 5));

let k = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]

console.log(bs_289(k, 100));