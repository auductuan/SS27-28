let number1 = (Math.random() * 100 + 1) | 0;
let number2 = (Math.random() * 100 + 1) | 0;
let number3 = (Math.random() * 100 + 1) | 0;
function kiemTraChanLe(number) {
    if (number % 2 === 0) {
        return `Số ${number} là số chẵn`;
    } else {
        return `Số ${number} là số lẻ`;
    }
}
console.log(kiemTraChanLe(number1));
console.log(kiemTraChanLe(number2));
console.log(kiemTraChanLe(number3));

