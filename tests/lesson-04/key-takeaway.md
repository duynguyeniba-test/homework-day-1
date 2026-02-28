# Phạm vi của biến
**Block scope (khối): biến được khai báo trong cặp ngoặc nhọn**
    - var: không bị giới hạn trong phạm vi cặp ngoặc nhọn
    - let/const: bị giới hạn, ra ngoài là undefined

if (true) {
var varVariable = "var không có block scope";
let letVariable = "let có block scope";
const constVariable = "const cũng có block scope";
}
console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined

**Function scope (Hàm): biến được khai báo trong một hàm**
    - Cả let/var/const ra ngoài hàm đều bị undefined

function myFunction() {
var functionScoped = "Chỉ có thể truy cập trong hàm này";
let alsoFunctionScoped = "Tương tự";
console.log(functionScoped); // OK
}

console.log(functionScoped); // Error: functionScoped is not defined

**Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm**

var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";

function testFunction() {
console.log(globalVar); // Truy cập được
console.log(globalLet); // Truy cập được
}

**Break: dùng để thoát khỏi vòng lặp lập tức**

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}

**Continue: dùng để bỏ qua phần còn lại vòng lặp hiện tại và chuyển sang lần lặp tiếp theo**

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}