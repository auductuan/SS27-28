let number=[1, 2, 3, 4, 5, 6, 7, 8];
let a= [];
console.log("Mảng số nguyên là:"+number);
for(let i=0; i<number.length; i++){
    if (number[i]%2==0) {
        a.push(number[i]);
    }
}
console.log("Mảng sau khi xóa các phần tử số lẻ là: " +a);

