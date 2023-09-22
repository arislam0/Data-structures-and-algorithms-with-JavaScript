// let arr = [64, 25, 12, 22, 11];
let arr = [10,5,12,7,8,3,100,60,10,8,7];

function selectionSort(arr) {
  let min_index;

  for (let i = 0; i < arr.length; i++) {
    min_index = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    let tem = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = tem;
  }
 
  return arr;
}

console.log(selectionSort(arr));
