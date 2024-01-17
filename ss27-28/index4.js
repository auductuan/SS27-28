let number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Mảng số nguyên chứa các phần tử là: ");
let a= [];
let b= [];
for(let i=0; i<number.length; i++){
    if (number[i]%2==0) {
        a.push(number[i]);
    }
}console.log("Mảng chứa các số chẵn là: " +a);
for(let i=0; i<number.length; i++){
    if (number[i]%2!=0){
        b.push(number[i]);
    }
}console.log("Mảng chứa các số lẻ là: "+b);
