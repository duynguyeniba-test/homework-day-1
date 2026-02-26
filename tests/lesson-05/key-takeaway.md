# Cách khai báo Hàm thông thường - Function Declaration:
function add(a, b) {
    return a + b;
}

# Khai báo hàm (function) bằng cách gán nó cho một biến - Function Expression (biểu thức hàm):
const add = function(a, b) {
    return a + b;
};

**So sánh cách gọi:** 
console.log(add (2, 3)); // 5 - cả hai đều giống nhau

## Ví dụ thực hành:
**Bai tap Function Expression - 1:**

const chuoi = function (name) {

return `Hello ${name}`;

}

console.log(chuoi("Duy"));

**Bai tap Function Expression - 2:**

const sum = function(price, quantity, discount) {

return price * quantity - discount;

}

console.log(sum(110, 3, 20));

# Lambda Function (arrow function)
*   Xuất hiện lần đầu
trong ES6 (ES2015).
*   Đây là cách viết ngắn
gọn hơn cho function
*   Sử dụng dấu =>

const add = (a, b) => {
return a + b;
};

## Một số cách viết ngắn gọn khác của Lambda Function - Implicit Return:
const add = (a, b) => a + b;
console.log(add(2,3));

const add = () => console.log(‘add’)

### Thực hành khai báo Arrow Function:
const ham = name => `Hello ${name}`;
console.log(ham("Duy"));

const number = (price, quantity, discount) => {
return price * quantity - discount;
}
console.log(number(10, 1, 1));

//OR

const number = (price, quantity, discount) => price * quantity - discount;
console.log(number(10, 1, 1));

# Anonymous Function - Function không tên
* function không có tên
* được sử dụng khi function chỉ cần dùng một lần hoặc làm callback

# DOM - Document Object Model
Khi vào một website, máy tính sẽ nhìn các khối text; hình ảnh; liên kết, ô input theo dạng cây cấu trúc (DOM)
Để bật xem DOM, bấm F12/Developer Tools > Element tab

<option value="usa">United States</option>

* <option value="usa">: thẻ mở
* </option>: thẻ đóng

## Các thẻ tiêu chuẩn
**1. Thẻ Cấu trúc khung trang**
    * <html> - thẻ gốc của trang
    * <head> - Chứa metadata: tiêu đề website, hiển thị trên Google
    * <body> - nội dung cả website hiển thị

**2. Thẻ Bố Cục & Ngữ nghĩa**
    * <div> - khối/container chung
    * <span> - inline container (phần tử nội tuyến)
    * <header>; <footer>; <nav> (navigation); <section>

**3. Thẻ nội dung:**
    * <h1> đến <h6>: tiêu đề
    * <p>: đoạn văn
    * <ul>: unorder list; <ol>: order list; <li>: list item

**4. Thẻ tương tác & Media**
    * <a>: liên kết
    * <img>: hình ảnh

**5. Thẻ Form (Quan trọng cho Testing)**
    * <form> biểu mẫu
    * <input> nhập liệu (text, password, checkbox, radio)
    * <button>
    * <select> và <option> dropdown
    * <textarea> vùng văn bản nhiều dòng

## Selector
    - Automation = tương tác với các phần tử trên trang web như input; fill; click... và để tương tác được, ta cần tìm được các phần tử tương ứng nên Selector là công cụ giúp ta tìm
        - Có 3 loại selector thường dùng
            * XPath:
                - Dùng được 99% trường hợp
                - Đa dạng có khả năng tìm các phần tử khó
                - Câu lệnh dài
                VD: //button[normalize-space() = 'Add to cart']

            * CSS selector
                - Ngắn gọn, performance cao
                - Dùng cho các trường hợp dễ tìm
                - Không linh hoạt bằng XPath
                VD: .add-to-cart

            * Playwright selector
                - Chỉ dành riêng cho Playwright
                - Cú pháp ngắn gọn, không phụ thuộc cấu trúc DOM
                - Thiết kế theo góc nhìn của người dùng đang nhìn thấy gì
                VD: page.getByText("Add to cart");

**Khi nào thì dùng gì?**
Playwright selector > CSS Selector > XPath
* Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án.
* Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải tuân theo.

### XPath tuyệt đối
    - Bắt đầu từ root (gốc), dùng dấu / (/html/body/div/input)
**Đặc điểm:**
    - Bắt đầu bằng /
    - Phải viết đầy đủ đường dẫn từ root
    - Dễ bị lỗi khi cấu trúc HTML thay đổi
    - Ít linh hoạt

### XPath tương đối
    - Bắt đầu từ bất kỳ đâu trong DOM, dùng dấu //input[@id='user']
**Đặc điểm:**
    - Bắt đầu bằng //
    - Tìm element ở bất kỳ vị trí nào
    - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
    - Nên dùng trong thực tế

# Playwright Basic Syntax
**Automation = tương tác + verify**

Phạm vi buổi 5 học cách tương tác với các phần tử:
    * Viết một test
    * Tổ chức thành các step
    * Tương tác cơ bản như navigation; click; fill

## test (test case)
    - Khi tạo file chạy test (VD: demo), phải luôn thêm .spec vào tên file vào cùng với định dạng file (ts)
    - Câu lệnh chạy test mẫu:

import { test } from '@playwright/test';

test ('<tên test>', async({ page }) => {
    // code của phần test
});

    Trong câu lệnh có 2 tham số gồm:
    * tên test
    * async (hàm anonymous)

## step
    - Đơn vị nhỏ hơn test
    - Các step nên map 1-1 với test case

import { test } from '@playwright/test';

test('Demo test 01', async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto("https://material.playwrightvn.com");
    });

await test.step('Step 2: Click vao bai hoc 1', async () => {
        const baiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        await baiHoc1Locator.click();

        // Check vao o Traveling
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();

        // Paste value vao 1 field
        // await page.locator("//input[@id='username']").fill("quocduy-nguyen-demo");

        // Fill tung value vao 1 field
        await page.locator("//input[@id='username']").pressSequentially("dannynguyen-demo", { delay: 100 });
    });
});