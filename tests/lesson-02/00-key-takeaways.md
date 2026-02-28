# Version Control System
- Distributed Version Control System - Git.

- Sự khác nhau giữa Git và GitHub.

- Git Three states (Working Directory; Staging area; Repository).

- Di chuyển và submit file từ local repository sang các state cũng như submit lên GitHub:
    - git init
    - git add . / git add <tên file>
    - git commit -m"message"
    - git push origin main

**Tổng hợp lại các câu lệnh của Git bao gồm tạo repo GitHub và liên kết repo local - git remote add origin <url>**
* Cấu hình git giữa global và local:
    * Command cho Global:
        * git config --global user.name “Tên bạn”
        * git config --global user.email “email của bạn” 
    * Command cho local:
        * git config user.name “Tên bạn”
        * git config user.email “email của bạn”
* Các câu lệnh khác của Git:
    * git status - xem trạng thái các file đang ở state nào (xanh - staging; đỏ - working directory).
    * git log - xem danh sách các commit.
* Git convention: <loại convention>: <short_description>
    * Chore: dùng khi push code chỉnh sửa nhỏ lẻ, dọn các file không dùng tới.
    * feat: thêm tính năng mới, test case mới.
    * fix: sửa lỗi 1 test trước đó.

# JavaScript Basic
1. Giới thiệu tổng quan về Javascript:

    * Các thành phần giúp cho browser hoạt động được:
        * HTML
        * CSS
        * JS
    * Giới thiệu về "Hello, World!" và cú pháp in giá trị console.log và cú pháp chạy code từ Terminal:
        * console.log("nội dung");
        * console.log('nội dung);
        * node 01-hello.js
    * Comment: phương pháp vô hiệu hóa tạm thời một đoạn code: 
        * Thêm dấu // trước đoạn code muốn comment
        * Thêm /* và */ vô trước dòng đầu tiên và dòng cuối cùng
2. Biến và Hằng:

    2.1.Biến:

    * Giới thiệu cơ bản về Biến trong lập trình (var; let)

        <từ khóa> <tên biến> = <giá trị>

        var centerName = "Better Bytes Academy";

        let isLovePlaywright = true;

    In giá trị:

        console.log(centerNam);

        console.log(isLovePlaywright);

    * Sự khác nhau giữa var và let cũng như hướng sử dụng:
        * Var là cú pháp cũ trong khi let mới hơn và an toàn hơn.
        * Var cho phép khai báo lại một biến còn let thì không.
        * Var có phạm vi global, let thì phạm vi theo mỗi code block.

    2.2. Hằng:
    * Giới thiệu cơ bản về Hằng:
        * Hằng là các giá trị không thay đổi, sử dụng khi muốn khai báo các giá trị không có nhu cầu thay đổi hoặc chỉ dùng một lần.

            <từ khóa> <tên biến> = <giá trị>

            const PI = 3.14;
        * Dùng const giúp code an toàn, dễ đọc trong khi dùng let khi chắc chắc cần thay đổi giá trị.
3. Data Type:

    * Number
    * String
    * Boolean
        * Để biết một biến có kiểu dữ liệu gì typeof <variable>
4. Toán tử so sánh:

    4.1. Toán tử so sánh 2 toán hạng:

    * So sánh bằng:
        
        * So sánh hai bằng == (Loose Equality) là kiểu so sánh giá trị sau khi chuyển đổi kiểu (type coercion).

                5 == "5" // true (chuyển string thành number)

                5 == "6" // false (chuyển string thành number)

                true == 1 // true (true chuyển thành 1)

                false == 0 // true (false chuyển thành 0)
        * So sánh ba bằng === (Strict Equality) là kiểu so sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu và là kiểu so sánh nên dùng.

                5 === "5" // false (khác kiểu)
                true === 1 // false (khác kiểu)
                false === 0 // false (khác kiểu)
                5 === 5 // true (cùng kiểu, cùng giá trị)
                 
    * So sánh không bằng != và !== :
        * So sánh !=
                5 != "5" // false (chuyển string thành number)

                true != 1 // false (true chuyển thành 1)

                false != 0 // false (false chuyển thành 0)

        * So sánh !==
                5 !== "5" // true (khác kiểu)

                true !== 1 // true (khác kiểu)

                false !== 0 // true (khác kiểu)

                5 !== 5 // false (cùng kiểu, cùng giá trị)
    * So sánh >, <, >=, <=

    4.2. Toán tử logic là kiểu toán tử logic dùng để kết họp nhiều điều kiện và trả về boolean.

        * && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
        * || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

                const isMoreThan6 = true;
                const isOfficial = true;
                const receive13 = isMoreThan6 || isOfficial;
                const receive14 = isMoreThan6 && isOfficial;

    * Toán tử một ngôi là kiểu toán tử chỉ cần một toán hạng để thực hiện.

        *Prefix: toán tử nằm phía trước - tăng trước, trả về sau
            * ++x;
            * --x;
        *Postfix: toán tử nằm ở phía sau - trả trước, tăng sau
            * x++;
            * x--;

            let a = 10;
            b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11
            
            let c = 10;
            d = c++; // trả về giá trị 10 cho d rồi mới tăng
            // => d có giá trị là 10
    4.3. Toán tử toán học tương tự như các phép tính cộng, trừ, nhân, chia.

        * Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực).
5. Câu điều kiện (If):
    * Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy.

            let hour = 8;
            if (hour <= 11) && hour <= 11 {
                console.log(“Good morning”);
            }
6. Vòng lặp - for (i):
    * Vòng lặp dùng để lặp lại 1 đoạn logic, theo số lần nhất định hoặc vô hạn, tùy theo điều kiện dừng.

        for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
        
        // code

        }

            for (let i = 0;i < 5; i++) {

            console.log("Xin chào!")

            }
7. VS Code:
    - Mac: Option + Shift + F
    - Window: Alt + Shift + F