function number_2(l1, l2) {
  let len1 = l1.length;
  let len2 = l2.length;
  let sum1 = 0;
  let sum2 = 0;
  let k = 1;

  for (let i = 0; i < len1; i++) {
    sum1 = sum1 + l1[i] * k;
    k = k * 10;
  }
  k = 1;
  for (let i = 0; i < len2; i++) {
    sum2 = sum2 + l2[i] * k;
    k = k * 10;
  }
  let sum = sum1 + sum2;
  
  let res = [];
  let i = 0;

  if (sum === 0) {
    return sum;
  } else {
    while (sum > 0) {
      let tem = sum % 10;
      res[i] = tem;
      i++;
      sum = parseInt(sum / 10);
    }
    return res;
  }

}

console.log(number_2([2, 4, 3], [5, 6, 4]));
console.log(number_2([0], [0]));
console.log(number_2([9,9,9,9,9,9,9], [9,9,9,9]));
