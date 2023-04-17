// Problem 4: Given 3 numbers (all different values), print which is greatest

let a=5, b=5, c=5;
let result=a>b && c<a?"A is Greater":b>a && c<b?"B is Greater":c>a && b<c?"C is Greater":"Ever number is equal";
console.log(result);