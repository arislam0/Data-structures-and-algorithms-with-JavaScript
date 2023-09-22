function bs_2389(nums, queries) {
  let len1 = nums.length;
  let len2 = queries.length;
  let result = [];
  let prefix = [];
  let c = 0;

  // sort arrary
  for(let i=0; i<len1-1; i++){
    for(let j=0; j<len1-i-1;j++){
        if(nums[j]>nums[j+1]){
            let tem = nums[j];
            nums[j]= nums[j+1];
            nums[j+1] = tem;
        }
    }
  }
  console.log(nums)

  // prefix arrary

  for (let i = 0; i < len1; i++) {
    c = c + nums[i];
    prefix[i] = c;
  }
  console.log(prefix);

  //quaries array
  let idex = 0;
  for (let i = 0; i < len2; i++) {
    let n = queries[i];

    //binary search 
    let left = 0;
    let right = prefix.length - 1;
    let mid;
    let fv = 0;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
    //   console.log(mid);

      if (prefix[mid] <= n) {
        fv = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result[idex] = fv;
    idex++;
  }
  return result;
}

console.log(bs_2389([4, 5, 2, 1], [3, 10, 21]));
console.log(bs_2389([2,3,4,5], [1]));
console.log(bs_2389([736411,184882,914641,37925,214915], [331244,273144,118983,118252,305688,718089,665450]));
