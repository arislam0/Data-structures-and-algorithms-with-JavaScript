
 //    for(let i=0; i<k; i++){
    //     s.unshift(s.pop());
    //    }

var rotate = function (nums, k){
    k = k % nums.length;
    
    if(k===nums.length){
      return nums;
    }
    
    nums.reverse(); ///[7,6,5,4,3,2,1]
    
     // [5,6,7,4,3,2,1]
    let start =0;
    let end = k-1;
    
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
     }
    // [5,6,7,1,2,3,4]
    
    start =k;
    end = nums.length-1;
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
     }
    
    
    return nums;
  }
  
  console.log(rotate([1,2,3,4,5,6,7],7))
  console.log(rotate([1,2],5))