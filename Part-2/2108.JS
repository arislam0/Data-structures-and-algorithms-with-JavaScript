
function TPA_2108(nums){
    let len = nums.length;
    let res = [];
    let m=0;

    for(let i=0; i<len; i++){
        let flag =0;
        let str = nums[i];
        let len2= str.length-1

        for(let j=0, k=len2; j<=k; j++, k--){
            if(str[j] !== str[k]){
                flag=1;
                break;
            }
        }
        if(flag===0){
            return str;
            // res[m]=str;
            // m++;
        }
    }
    // return res;
    return "";
}

console.log(TPA_2108(["abc","car","ada","racecar","cool"]));
console.log(TPA_2108(["notapalindrome","racecar"]));
console.log(TPA_2108(["def","ghi"]));
console.log(TPA_2108(["def","ghi","121","454"]));