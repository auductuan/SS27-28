let numbers = [1, 2, 3, 4, 5, 6, 7, 3, 4];
let a = [];
for (let i = 0; i < numbers.length && a.length < 2; i++) {
    let b= numbers[i];
    if (numbers.indexOf(b) === numbers.lastIndexOf(b)) {
        a.push(b);
    }
}
console.log("Mảng gốc là: " + numbers);
console.log("2 phần tử đầu tiên là độc nhất trong mảng là: " + a);
