let list = ["quạt", "tủ lạnh", "chổi", "điều hòa", "máy sưởi"];
let a = prompt("Nhập vào một chuỗi:");
let ketQua = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].includes(a)) {
        ketQua.push(list[i]);
    }
}
console.log("Mảng ban đầu:", list);
console.log(`Các phần tử có chứa chuỗi "${a}":`, ketQua);
