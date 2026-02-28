# GIT
## Undo Actions
    1. Commit message:
        - Dùng để sửa message cho một commit có sẵn.

        git commit --amend -m"cập nhật status commit"

    2. Undo things:
        - Dùng để move các files đang ở Staging area trở về Working Directory trong 1 commit.
        Lưu ý: để sử dụng lệnh này, phải có ít nhất 1 file được tạo commit.

        git restore --staged <file_name>  //restore 1 file nhất định

        git restore --staged // restore tất cả file ở Staging area

    3. Un-commit:
        - Dùng để remove các file từ commit gần nhất trở lại Working Directory để chỉnh sửa lại các file mà đã add vào Repository area.
        Lưu ý:
            - Để sử dụng lệnh này, cần có ít nhất 2 commits và commit được remove sẽ là commit gần nhất (commit đầu tiên không thể bị reset, nếu muốn, phải xóa thư mục .git rồi tạo init lại)

        git reset HEAD~1
## Branching
    1. Pull Code:
        - Lấy code từ server về: git pull origin main
    2. Branch:
        - Git sử dụng nhánh (branch) để tạo ra các "phiên bản" riêng của code, nhằm không làm ảnh hưởng tới bản code gốc.
            - Khi tạo repo (git init), nhánh code mặc định sẽ được khởi tạo.

            git config --global init.defaultBranch main (cấu hình: đặt nhánh mặc định là nhánh main)

        - Một số câu lệnh của nhánh:
            - Xem danh sách nhánh: git branch (cần có ít nhất 1 branch để hiện danh sách nhánh)
            - Tạo nhánh mới: git branch <tên_branch> (nhánh được copy giống y hệt nhánh gốc)
            - Chuyển sang nhánh mới: git checkout <tên_branch>
            - Vừa tạo, vừa chuyển sang nhánh mới: git checkout -b <tên>
            - Xoá branch: git branch -D <tên nhánh> (Phải đứng ở nhánh khác trước khi xóa)

        **Lưu ý chung: luôn pull code về trước khi tạo nhánh mới**

    3. Ignore file

# Javascript
## Convention
    - Convention giúp dòng code được viết theo format chung, dễ đọc code.
    - Một số convention phổ biến:
        - snake_case: các chữ viết thường, cách nhau bởi dấu gạch dưới (tạm thời không dùng trong lớp)
        - kebab-case: các chữ viết thường, cách nhau bởi dấu gạch ngang (đặt tên file và folder)
        - camelCase: chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên (đặt tên biến, hàm)
        - PascalCase: tất cả các chữ cái đều viết hoa (đặt tên class)
## Console.log nâng cao
    1. Trích một thuộc tính có trong biến:
        let name = “Nga”;
        console.log(`Toi la ${name}`);

        OR

        console.log(“Toi ten la” + name + “”);
        1.1. Trích nhiều thuộc tính và dùng console.log để tính dien tích:

        const dai = 5;
        const rong = 10;
        const dienTich = dai * rong;
        console.log(`Dien tich hinh chu nhat (${dai}x${rong}) = ${dienTich}`);

    2. Object Object là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript, dùng để lưu trữ dữ liệu dạng key-value.
        const product = {
            "name": "Laptop",
            'manufacturer': {
                "myName": "Acer",
                year: 2024
            }
        };
        console.log(product.name);
        console.log(product.manufacturer);
        console.log(product.manufacturer ["myName"]);
        
    3. Array - Mảng:
        - Độ dài mảng tính theo số thứ tự với số đầu tính là 1.
        - Lấy phần tử theo index với thứ tự số đầu tính là 0.
    
    const arr = [3, 7, 9, 21,54];
    console.log(arr[3]);
    console.log(arr.length);

    4. Function:

    function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    // console.log(`Dien tich hinh chu nhat (${dai}x${rong}) =${dienTich}`);
    return dienTich;
}
    console.log(tinhDienTich(5, 10));
    console.log(tinhDienTich(20, 5));