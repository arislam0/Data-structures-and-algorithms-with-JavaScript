
function twoPointerAlgo(arr){
    let i= 0;
    let k= arr.length-1;

    while(i<=k){
        let tem = arr[i];
        arr[i] = arr[k];
        arr[k] = tem;
        i++;
        k--;
    }
    return arr;
}

console.log(twoPointerAlgo([5,7,6,3,10,1]));