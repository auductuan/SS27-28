
let mang = ["truong con", "tung da cap",  "quang dep trai",  "duc cop", "son so ma"];
let length = (arr) => {
    let dodai = 0;
    let a = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > dodai) {
            dodai = arr[i].length;
            a = arr[i];
        }
    }
    return a;
};
    
console.log("Mảng ban đầu:", mang);
console.log("Phần tử có độ dài lớn nhất:", length(mang));
