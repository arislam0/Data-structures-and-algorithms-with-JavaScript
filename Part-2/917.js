function isCharLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

function td_917(s) {
  let nums = s.split("");
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (isCharLetter(s[i]) === false) {
      i++;
      continue;
    } else if (isCharLetter(s[j]) === false) {
      j--;
      continue;
    } else {
      let tem = nums[i];
      nums[i] = nums[j];
      nums[j] = tem;
      i++;
      j--;
    }
  }
  return nums.join("");
}

console.log(td_917("ab-cd"));
console.log(td_917("a-bC-dEf-ghIj"));
console.log(td_917("Test1ng-Leet=code-Q!"));




