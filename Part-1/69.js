function bs_367(n){

    let low= 1 ;
    let high = n;
    let ans =0;

    while(low<=high){
        let mid= Math.floor((high+low)/2);
        console.log(mid);

        if(mid*mid <= n){
            ans= mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return ans;
}

console.log(bs_367(29));