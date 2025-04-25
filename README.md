# Quiz2020 Autofarm by B.Trọng

[![GitHub stars](https://img.shields.io/github/stars/Trongdepzai-dev/Hack-quiz2020?style=social)](https://github.com/Trongdepzai-dev/Hack-quiz2020/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Trongdepzai-dev/Hack-quiz2020?style=social)](https://github.com/Trongdepzai-dev/Hack-quiz2020/network/members)
[![GitHub license](https://img.shields.io/github/license/Trongdepzai-dev/Hack-quiz2020)](https://github.com/Trongdepzai-dev/Hack-quiz2020/blob/main/LICENSE) ## Giới thiệu

Quiz2020 Autofarm là một script tự động mạnh mẽ được thiết kế để đơn giản hóa quá trình làm quiz trên website **Quiz2020.com**. Thay vì phải tự mình click và hoàn thành từng câu hỏi, script này sẽ đảm nhận việc đó một cách tự động, giúp bạn tiết kiệm thời gian và công sức đáng kể.

Script này hoạt động dưới dạng một User Script thông qua tiện ích mở rộng trình duyệt như Tampermonkey.

## Tính năng nổi bật

* **Hoàn thành Quiz tự động:** Script tự động di chuyển qua các câu hỏi và chọn đáp án dựa trên logic tích hợp sẵn.
* **Tên người tham gia tùy chỉnh:** Cho phép bạn đặt tên hiển thị theo ý muốn trong quá trình làm quiz.
* **Kiểm soát script:** Thêm một nút "Dừng Script" tiện lợi ngay trên giao diện trang web, cho phép bạn tạm dừng hoạt động tự động bất cứ lúc nào.
* **Đếm ngược tải lại trang:** Hiển thị bộ đếm ngược thời gian trước khi trang quiz được tải lại, giúp bạn theo dõi và chuẩn bị.
* **Quản lý phiên:** Tự động xóa cookie và local storage trước mỗi lần tải lại trang, giúp mô phỏng một phiên truy cập mới và có thể giải quyết một số vấn đề liên quan đến dữ liệu phiên cũ.
* **Thông báo kết quả:** Hiển thị thông báo điểm số sau khi hoàn thành một lượt quiz.
* **Âm báo hoàn thành:** Có tùy chọn phát âm thanh thông báo khi một lượt quiz kết thúc (có thể bật/tắt).
* **Khoảng dừng tùy chỉnh:** Cho phép thiết lập thời gian nghỉ giữa các lượt chạy tự động.

## Cài đặt

Để sử dụng script này, bạn cần cài đặt một trình quản lý User Script trên trình duyệt của mình, phổ biến nhất là Tampermonkey.

1.  **Cài đặt Tampermonkey:**
    * Nếu chưa có, hãy cài đặt tiện ích mở rộng [Tampermonkey](https://tampermonkey.net/) cho trình duyệt của bạn (hỗ trợ Chrome, Firefox, Edge, Opera và nhiều trình duyệt khác).

2.  **Thêm Script Quiz2020 Autofarm:**
    * Sau khi cài đặt Tampermonkey, click vào biểu tượng Tampermonkey trên thanh công cụ của trình duyệt.
    * Chọn "Tạo một script mới..." (Create a new script...).
    * Xóa toàn bộ nội dung mặc định trong cửa sổ soạn thảo.
    * Truy cập vào mã nguồn script [tại đây](https://github.com/Trongdepzai-dev/Hack-quiz2020/blob/main/Hack.js). Click vào nút `Raw` để xem mã nguồn gốc.
    * Sao chép **toàn bộ** nội dung mã nguồn (`Ctrl+A` rồi `Ctrl+C`).
    * Dán toàn bộ mã nguồn vừa sao chép vào cửa sổ soạn thảo script mới trong Tampermonkey (`Ctrl+V`).
    * Lưu script (thường là `File` -> `Save` hoặc nhấn `Ctrl+S`).

Script Quiz2020 Autofarm giờ đây đã được cài đặt và sẽ tự động chạy khi bạn truy cập trang web Quiz2020.com.

## Cách sử dụng

Sau khi cài đặt script và đảm bảo Tampermonkey đang hoạt động, bạn chỉ cần truy cập trang web **Quiz2020.com** và điều hướng đến trang quiz.

* Script sẽ tự động nhận diện trang quiz và bắt đầu quá trình làm bài.
* Một nút "Dừng Script" sẽ xuất hiện trên trang để bạn có thể tạm dừng hoạt động bất cứ lúc nào.
* Bộ đếm ngược sẽ hiển thị thời gian còn lại trước khi trang được tải lại cho lượt quiz tiếp theo.
* Kết quả quiz sẽ được hiển thị sau khi hoàn thành.

## Cấu hình

Bạn có thể tùy chỉnh một số cài đặt của script bằng cách chỉnh sửa các biến ở đầu file mã nguồn script trong Tampermonkey.

Mở script `Quiz2020 Autofarm` trong Tampermonkey và tìm các dòng sau:

```javascript
const FIXED_NAME   = 'H@acker'; // Chỉnh tên ở đây
const COUNT_START  = 5;         // Đếm ngược reload 
const BEEP_ENABLED = true;      // Bật âm báo khi hoàn thành nếu ko muốn đổi lệnh const BEEP_ENABLED = true; thành const BEEP_ENABLED = false;
const PAUSE_BETWEEN_RUNS = 2000; // Thời gian nghỉ giữa các lượt (ms)
