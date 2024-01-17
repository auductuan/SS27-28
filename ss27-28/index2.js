let a= +prompt("Nhập số nguyên a");
let b= +prompt("Nhập số nguyên b");
let numbers = [];
for(let i=a+2; i<b-2; i++){
   numbers.push(i);
}
console.log("Mảng chứa các số từ " + a + " đến " + b + ":");
console.log(numbers);
