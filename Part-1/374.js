
function guess(mid){ //API

    let pick = 45;

    if(pick===mid){
        return 0;
    }
    else if(mid<pick){
        return 1
    }
    else{
        return -1
    }

}

function bs_374(n) {
    let start = 1;
    let end = n;
    let mid;

    while (start <= end) {
     mid = Math.floor((start+end)/2);
     
      if (guess(mid) === 0) {
        return mid;
      } else if (guess(mid) === 1) {
        start = mid + 1;
      } else if(guess(mid) === -1) {
        end = mid - 1;
      }
    }
}

console.log(bs_374(50));
// console.log(bs_374(2147483647,6));
