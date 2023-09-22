// searching-> unsorted->linear search
// sorted -> Binary search 
// viva-> order agnostic binary search

let arr = [10,20,5,15,25,45,100];
const target =4500;

function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return `${target} found at index ${i}`;
        }
    }
    return 'Not found'; 
}

console.log(linearSearch(arr,target));

// assignment
  //1. code- github
  // 2. article writing - medium.com, dev.to, hashnode.
  // codesnap...