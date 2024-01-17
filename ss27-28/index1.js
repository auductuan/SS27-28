let numberList=[1, 2, 4, 5, 9, -1, -2];
let max = numberList[0];
for(let i=0; i<numberList.length; i++){
   if(max < numberList[i]){
    max = numberList[i];
  }
}console.log("Phần tử lớn nhất trong mảng là: "+max);

let min = numberList[0];
for(let i=0; i< numberList.length; i++){
    if(min > numberList[i]){
        min = numberList[i];
}
}console.log("Phần tử nhỏ nhất trong mảng là: "+min);
