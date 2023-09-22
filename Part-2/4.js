function TD_4(nums1, nums2){

    let len1 = nums1.length;
    let len2 = nums2.length;
    let len = len1+len2;
    let res = [];
    let i=0;
    let j=0;
  
    for(let k=0; k<len; k++){

        if(nums1[i]<=nums2[j] || j>=len2){
            res[k] = nums1[i];
            i++;
            continue
        }
        else {
            res[k] = nums2[j];
            j++;
            continue;
        }
    }
    let mid = (len+1)/2;

    if(mid%2===1){
        return res[mid-1];
    }
    else{
        let f = Math.floor(mid);
        let c = Math.ceil(mid);
        return (res[f-1]+res[c-1])/2;
    }
}

console.log(TD_4([1,3],[2]));
console.log(TD_4([1,2],[3,4]));
console.log(TD_4([0,0],[0,0]));

console.log(TD_4([2],[]));

// let num1 =[3,5,6,7];
// let num2 =[2,5,6,7];
// const all = [...num1, ...num2].sort((a,b)=>{ return a-b;});

// console.log(all);