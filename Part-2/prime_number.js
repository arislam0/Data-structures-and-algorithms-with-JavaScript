function isPrme(num){

    if(num === 1){
        return true;
    }

    let count =0;

    for(let i=1; i<=num; i++){
        if(num%i===0){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    else{
        return false;
    }
}

let arr = [5,6,7,10,11,15,17,19,20];
for(let i=0; i<arr.length; i++){
    console.log(isPrme(arr[i]));
}