function twopoint_arrary(nums, arr) {
  let len1 = nums.length;
  let len2 = arr.length;
  let len = len1 + len2;
  let result = [];
  let i = 0,
    j = 0;

  for (let k = 0; k < len; k++) {
    if ( (nums[i] <= arr[j] && i < len1) || j>=len2) {
      result[k] = nums[i];
      i++;
      continue;
    }
    result[k] = arr[j];
    j++;
    console.log(k);
  }

  return result;
}

console.log(twopoint_arrary([5, 10, 15, 20, 25, 30], [15, 23, 25, 30, 35]));
console.log(twopoint_arrary([1,2,3,4], [1,1,1,2,2]));
