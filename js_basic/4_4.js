let a = 10;
// =
// += -> x+=y-> x=x+y;
// a+=10;  // a=a+10 -> a=10+10->a=20;
// a-=10;  // a=a+10 -> a=10+10->a=20;
// a/=10;  // a=a+10 -> a=10+10->a=20;
// a**=10;  // a=a+10 -> a=10+10->a=20;
a%=10;  // a=a+10 -> a=10+10->a=20;
console.log(a);
