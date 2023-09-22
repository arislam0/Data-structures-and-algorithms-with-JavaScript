function isBadVersion(version){
    let bad=4;
    // let bad=1702766719;

     if(version>=bad){
            return true;
    }
    return false;
    
}

function bs_278(n){
    let start = 1;
    let end = n;
    let mid;
    let fv=-1;
    while(start<=end){
         mid = Math.floor((start+end)/2);
         
        if(isBadVersion(mid)){
            fv=mid;
            end = mid-1;
        }
        else {
            start=mid+1;
            
        }
    }
    return fv;
}
console.log(bs_278(5));
console.log(bs_278(2126753390));