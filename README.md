# Quiz2020 Autofarm by B.Trọng

## Giới thiệu
Đây là một script tự động giúp bạn hoàn thành quiz trên website Quiz2020. Script này có các tính năng bao gồm:
- Tự động làm quiz với tên tùy chỉnh.
- Thêm nút dừng script.
- Đếm ngược thời gian reload trang.
- Xóa cookie và storage mỗi lần reload.
- Hiển thị thông báo điểm và âm báo khi hoàn thành.

## Cài đặt

1. **Cài đặt Tampermonkey**:
   - Trước tiên, bạn cần cài đặt [Tampermonkey](https://tampermonkey.net/) (công cụ giúp chạy các script người dùng trên trình duyệt).
   
2. **Thêm Script**:
   - Sau khi cài đặt Tampermonkey, mở Tampermonkey trên trình duyệt của bạn.
   - Tạo một script mới và dán toàn bộ mã JavaScript vào script mới.
   - Lưu script và script sẽ tự động chạy khi bạn truy cập vào quiz2020.com.

## Cấu hình

- **FIXED_NAME**: Đặt tên người tham gia quiz (ví dụ: `H@cker`). Bạn có thể thay đổi tên này thành tên bất kỳ bạn muốn.
- **COUNT_START**: Thời gian đếm ngược trước khi trang được reload (tính bằng giây).
- **BEEP_ENABLED**: Nếu bạn muốn có âm báo khi hoàn thành quiz, hãy đặt giá trị `true`. Nếu không, đặt `false`.
- **PAUSE_BETWEEN_RUNS**: Thời gian nghỉ giữa các lượt quiz (tính bằng mili giây).

```javascript
const FIXED_NAME   = 'H@acker'; // Chỉnh tên ở đây
const COUNT_START  = 5;         // Đếm ngược reload
const BEEP_ENABLED = true;      // Bật âm báo khi hoàn thành
const PAUSE_BETWEEN_RUNS = 2000; // Thời gian nghỉ giữa các lượt (ms)
