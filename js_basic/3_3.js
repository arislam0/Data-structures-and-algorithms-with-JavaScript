let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// arr.push('July');

// insert
//arr.push(0)-> element last item hoye add hoy.
// arr.unshift(5,10); //first item hoye add hoy.
// arr.splice(2,0,'Rose');

// remove:
// arr[1]=null;
// arr.splice(1,1);
// arr.pop(); //last item
// arr.shift(); //1st itme

// replace
// arr.splice(2,1,'March'); //postition, delete, ADD.

console.log(arr);

// SEARCH:
let month = 'Mar';
let isFound = false;
for (let i=0; i<arr.length; i++){
    if(arr[i]==month){
        console.log('Item has been found, index no: '+i);
        isFound = true;
        break;
    }
    
}
if(isFound == false){
 console.log('Nothing found');
}


// console.log(arr);