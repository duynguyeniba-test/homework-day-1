// if (true) {
// var varVariable = "var không có block scope";
// let letVariable = "let có block scope";
// const constVariable = "const cũng có block scope";
// }

// console.log(varVariable); // OK - var không bị giới hạn bởi block
// console.log(letVariable); // Error: letVariable is not defined
// console.log(constVariable); // Error: constVariable is not defined

// function myFunction() {
// var functionScoped = "Chỉ có thể truy cập trong hàm này";
// let alsoFunctionScoped = "Tương tự";
// console.log(functionScoped); // OK
// }
// console.log(functionScoped); // Error: functionScoped is not defined

// var globalVar = "Tôi là biến toàn cục";
// let globalLet = "Tôi cũng là biến toàn cục";

// function testFunction() {
// console.log(globalVar); // Truy cập được
// console.log(globalLet); // Truy cập được
// };
// testFunction();

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}

// const numbers = [1, 3, 8, 7, 9, 11, 10, 21, 100, 102, 104];
// let firstEven = null;
// console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];

//     if (num % 2 === 0) {
//         firstEven = num;
//         break;
//     }
//     console.log(`So ${num} khong phai so chan`);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Thoát vòng lặp khi i = 5
//     }
//     console.log(i);
// }

// const scores = [85, 92, 78, 80, 60, 88];
// console.log("Diem >= 80:");

// for (let i = 0; i < scores.length; i++) {
//     const score = scores[i];
//     if (score < 80) {
//         continue;
//     }
//     console.log(score);
// }