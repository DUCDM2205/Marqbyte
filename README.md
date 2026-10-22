# MarqByte — Website giới thiệu dịch vụ

Website tĩnh HTML/CSS/JavaScript thuần, tiếng Việt. Không cần npm, framework hoặc build. Màu trắng, xanh lá, đen. Font hệ thống hỗ trợ tiếng Việt, không tải font từ bên ngoài.

## Bản sửa hiển thị v3

Đã giới hạn chiều rộng ảnh và grid để tránh tràn bố cục. CSS/JS đang dùng file có mã phiên bản trong `assets` để trình duyệt không lấy nhầm bản cũ. Khi upload cập nhật, cần thay đồng thời TẤT CẢ file HTML và thư mục `assets` trong cùng một commit. Không chỉ upload `index.html`, không bỏ qua file CSS/JS có tên `marqbyte-style-...` / `marqbyte-app-...`.

Nếu tự sửa `assets/style.css` hoặc `assets/app.js`, chạy `python scripts/version_assets.py` để tạo tên phiên bản mới và cập nhật liên kết trong HTML. Upload các HTML và assets vừa được cập nhật cùng nhau.

Đã kiểm tra 6 trang chính ở 390, 768 và 1280px, không tràn ngang tài liệu.

## Xem trên máy tính

Giải nén rồi mở `index.html` bằng Chrome hoặc Edge. Hoặc mở thư mục bằng VS Code, chạy `python -m http.server 5500`, truy cập http://localhost:5500. Nhấn Ctrl+C để dừng.

## Đưa lên GitHub Pages bằng giao diện web

1. Đăng nhập GitHub, tạo repository mới (ví dụ `marqbyte-website`). Chọn Public nếu dùng GitHub Free với Pages.
2. Trong repository, chọn Add file → Upload files.
3. Upload toàn bộ nội dung bên trong thư mục `marqbyte`, bao gồm `index.html`, tất cả trang `.html`, thư mục `assets`, `.nojekyll` và README.md. Không upload nguyên file ZIP; không để `index.html` nằm trong một thư mục con.
4. Chọn Commit changes.
5. Mở Settings → Pages → Build and deployment → Deploy from a branch.
6. Chọn branch `main`, thư mục `/ (root)`, bấm Save.
7. Sau khi tác vụ Pages hoàn tất, mở địa chỉ GitHub hiển thị trong phần Pages.

Mọi đường dẫn nội bộ là đường dẫn tương đối để sử dụng được với repository Pages.

## Bản cập nhật nội dung SEO & bảng giá

Đã mở rộng 7 trang dịch vụ, thêm 21 gói với phạm vi và bảng so sánh, 7 ảnh minh họa WebP riêng và trang `bang-gia.html`. Các mức giá là đề xuất tham khảo, cần rà soát giá vốn trước khi dùng làm báo giá chính thức. Xem `SEO-CONTENT-NOTES.md` để đọc bảng giá tổng hợp, định hướng từ khóa và cấu hình canonical/sitemap theo URL thật.

Mỗi nút tư vấn gói tự chọn sẵn dịch vụ và gói trong form; thay dịch vụ sẽ cập nhật danh sách gói. Form vẫn dùng mailto như bản trước.

## Các trang

- index.html: Trang chủ.
- gioi-thieu.html: Giới thiệu thương hiệu và nguyên tắc làm việc.
- dich-vu.html: Tổng quan 7 nhóm dịch vụ, 3 phương án hợp tác.
- bang-gia.html: Giá khởi điểm 7 dịch vụ và đường dẫn tới 21 gói chi tiết.
- dich-vu-*.html: 7 trang dịch vụ chi tiết.
- giai-phap.html: Hướng triển khai tham khảo cho SME, cửa hàng địa phương, trường học và thương mại điện tử.
- lien-he.html: Thông tin liên hệ và biểu mẫu tư vấn / thời gian muốn trao đổi.
- 404.html: Trang không tìm thấy.
- assets/style.css: Giao diện và responsive.
- assets/app.js: Menu mobile, chọn dịch vụ theo URL, soạn email tư vấn.

## Liên hệ

- Điện thoại: 0777 800 720.
- Email: ducaliw2100@gmail.com.
- Zalo: https://zalo.me/0777800720. Cần kiểm tra tài khoản có cho phép tìm bằng số điện thoại trước khi chạy chính thức.

Form sử dụng mailto: để mở ứng dụng email; người dùng tự nhấn Gửi trong ứng dụng. Chưa có backend, database, dịch vụ nhận form, thông báo tự động hoặc đặt lịch tự xác nhận. Ngày giờ là đề xuất chờ xác nhận, không phải lịch đã được đặt. Nếu thiết bị chưa cấu hình ứng dụng email, dùng nút Zalo hoặc gọi trực tiếp. Không lưu thông tin khách hàng vào trình duyệt.

## Thay logo

Logo đính kèm chưa truy cập được lúc triển khai; chữ MarqByte và biểu tượng m↗ hiện là nhận diện tạm bằng HTML/CSS, không phải logo chính thức.

Đặt logo chính thức tại `assets/logo.png` (hoặc .svg), thay nội dung bên trong các thẻ `a.brand` ở header/footer bằng `<img src="assets/logo.png" alt="MarqByte" width="180" height="45">`. Thêm CSS `.brand img { max-width:180px; height:auto; display:block; }`. Lặp lại ở tất cả trang HTML. Favicon riêng ở `assets/favicon.svg`.

## Điều chỉnh nội dung

Sửa văn bản trực tiếp trong các file HTML. Chỉnh màu tại `:root` trong style.css. Header/footer được viết sẵn ở từng trang để nội dung và điều hướng vẫn hoạt động khi JavaScript bị tắt; khi đổi thông tin chung cần sửa đồng bộ ở tất cả các trang.

Chưa thêm khách hàng, logo đối tác, testimonial hoặc số liệu thành tích chưa được xác minh. Hình biểu đồ trên trang chủ là minh họa, đã ghi chú trong giao diện.

## Kiểm tra trước khi dùng chính thức

Thay logo; rà soát nội dung và phạm vi dịch vụ; thử Zalo/gọi điện trên điện thoại thật; thiết lập dịch vụ nhận form nếu cần; bổ sung chính sách quyền riêng tư khi thu thập dữ liệu qua backend; chạy `scripts/configure_seo.py` với URL thật để tạo canonical, sitemap và thẻ chia sẻ; cấu hình tracking nếu triển khai. Hiện chưa gắn quảng cáo, cookie tracking hay API.
