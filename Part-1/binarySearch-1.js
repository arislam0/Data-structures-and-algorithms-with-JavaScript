
//order agnostic binary search
 
// let arr = [10,20,30,40,50,60,70,80,90,100]

// let arr = ['a','b','f','h','m','p','z'];
let arr = [100,50,40,30,20,10];
const target = 40;


function binarySearch(){
    let start = 0;
    let end = arr.length-1;
    let mid;
    let isAsce = (arr[end]>=arr[start]) ?true:false;
    // console.log(isAsce);

    while(start<=end){
        mid = Math.floor((start+end)/2);
        // 3 steps to check out
            // 1. equal
            // 2. large
            // 3. small
        if(arr[mid]===target){
            return `${target} found at index ${mid}`;
        }
        else if(arr[mid]<target){
           if(isAsce){
              start = mid+1;
           }
           else{
              end= mid-1;
           }

        }
        else{
           if(isAsce){
             end=mid-1;
           }
           else{
             start=mid+1;
           }
        }

    }
    return `${target} not found`;

}

console.log(binarySearch(arr,target));