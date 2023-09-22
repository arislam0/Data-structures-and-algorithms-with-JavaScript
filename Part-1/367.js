function bs_367(n){

    let low= 1 ;
    let high = n;
    let mid;

    while(low<=high){
        mid=Math.floor((low+high)/2);
        console.log(mid);

        if(mid*mid === n){
            return true;
        }
        else if(mid*mid<n){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return false;
}

console.log(bs_367(16));