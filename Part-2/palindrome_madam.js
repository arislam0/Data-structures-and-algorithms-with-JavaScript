function palindrome(name) {
  let i = 0;
  let flag = "Palindrome Yes";
  let k = name.length - 1;

  console.log(k);

  while (i <= k) {
    if (name[i] !== name[k]) {
      flag = "Palindrome No";
      break;
    }
    i++;
    k--;
  }
  return flag;
}
console.log(palindrome("madam"));
console.log(palindrome("arif"));
console.log(palindrome("wow"));
console.log(palindrome("abcca"));
console.log(palindrome("abccba"));
