# Playwright là gì?
    - Là một framework
    - Tiền thân là Puppeteer,
được Microsoft tài trợ và phát
triển lên.
    - https://playwright.dev/
    - Ra đời 31/01/2020
    - Version mới nhất: v1.57

## Ưu điểm của Playwright:
- Cross browser:
    - Hỗ trợ các trình duyệt phổ biến và hỗ trợ lên tới 143 phiên bản trình duyệt
- Cross platform
    - Code một lần để chạy trên các hệ điều hành phổ biến
- Sở hữu nhiều tính năng tối ưu (auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass, lúc fail))
- Report đầy đủ thông tin
    - Chia Pass/Fail đầy đủ theo từng loại browser

# Các công cụ sử dụng trong khóa học
## NVM (Node Version Manager): quản lý các phiên bản NodeJs (tức là công cụ để chạy code)
    - Có 2 options để cài NodeJS là trực tiếp hoặc thông qua NVM
        - Cài thông qua NVM tiện lợi vì dễ chuyển đổi nhiều phiên bản NodeJS (các dự án khác nhau có thể làm ở phiên bản NodeJS khác nhau)
## Git & GitHub:
    - Git: quản lý source code
    - GitHub: chia sẻ code, làm việc nhóm

# Cấu hình Git
- Trước khi làm việc với Git, cần một số cấu hình mặc định:
    - Config username (tên người dùng):
        - git config --global user.name “<tên bạn>”
    - Config email (địa chỉ email):
        - git config --global user.email “<email của bạn>”
    - Config branch default (nhánh mặc định):
        - git config --global init.defaultBranch main

# Visual Studio Code
- Sau khi cài VS Code thành công, tiếp tục cài extension "Playwright Test for VSCode"
- Tiếp theo, thay đổi terminal mặc định là Window Powershell bằng Git Bash
    - **Ctrl + Shift + P:** Hiển thị hộp thoại và tìm terminal default, chọn Terminal: Select Default Profile và chọn Git Bash. Sau đó, bấm Ctrl + Shift + ~ để bật terminal và check bash/màu

# Kết nối với GitHub
## Tạo SSH Key
    - Để kết nối Git (local) và GitHub (online platform), cần cặp khóa SSH để xác thực kết nối Git và GitHub
        - SSH keys có 1 cặp khóa:
            - id_rsa (chuỗi khóa của Git), giữ riêng chuỗi khóa này
            - id_rsa.pub (chuỗi khóa ), có thể giữ chuỗi khóa này cho người khác
            - Lưu chuỗi khóa id_rsa ở ~/.ssh (~ đại diện cho thư mục Home của Windows)
## Lệnh tạo SSH Keys
    - ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
        - Enter lần đầu để tạo câu lệnh gen key, vị trí lưu mặc định sẽ hiện và không cần thay đổi
        - Enter lần hai sẽ yêu cầu đặt mật khảu của chuỗi id_rsa, bỏ trống bằng cách enter lần nữa
        - Tiếp tục enter cho tới khi thông báo key đã tạo, chuỗi key id_rsa sau khi tạo không cần tạo nữa (id_rsa.pub)
## Kết nối SSH tới GitHub
    - Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub sau đó copy toàn bộ value
    - Đi tới trang GitHub > SSH and GPG keys, title gõ nội dung nhận biết chuỗi khóa e.g. personal computer... và paste value vào khung key sau đó bấm nút Add

# Dùng Playwright chạy test đầu tiên:
    - Tạo một thư mục chứa code của toàn bộ khóa học để dễ quản lý code, sau đó mở VS Code và mở thư mục đã tạo
        * Mở Terminal và chạy lệnh: mkdir <tên folder>
        * cd <tên folder>
        * npm init playwright@latest, enter liên tục tới khi thông báo thành công (happy hacking)
        Sau khi tải thành công, sẽ xuất hiện các thư mục con phía dưới:
        - node_modules (thư viện)
        - tests > example.spec.ts (code test)
        - playwright.config.ts (file cấu hình)
    - Để chạy test trên folder local vừa tạo, chạy lệnh code . từ Terminal, 
    - Đi tới mục Testing ở thanh công cụ bên trái, bấm vào icon play xanh lá để chạy test
        - Nếu không hiện nút run hoặc không hiện browser:
            1. Click refresh button
            2. Cuộn xuống dưới, thanh bên trái, chọn Chromium ở mục Projects
            3. Chọn "Show browser" ở mục Settings

## Đưa code lên GitHub: tạo Repo
### Thực hiện 1 lần duy nhất:
    - Khởi tạo repo local: 
        - git init
        - git remote add origin <url> (GitHub account URL)
### Thực hiện mỗi khi có thay đổi cần push code:
    - Thêm tất cả file vào staging: git add .
    - Commit file: git commit -m "<message>" (message viết kèm convention)
    - Push code