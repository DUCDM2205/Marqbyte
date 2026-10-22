# MarqByte — Nội dung & giá tham khảo v2

## Phạm vi cập nhật

Giữ bảng màu, header/footer, font, phong cách công nghệ và bố cục chính đã được duyệt. Mở rộng 7 trang dịch vụ: mô tả nhu cầu, đối tượng phù hợp, 6 nhóm công việc, 3 gói có hình minh họa, bảng so sánh, phần chưa bao gồm, đầu ra bàn giao, đo lường, chuẩn bị và 5 câu hỏi thường gặp. Thêm trang bảng giá tổng hợp và liên kết sang gói tương ứng trong form.

## Cụm chủ đề theo trang

| Trang | Chủ đề chính | Cụm từ liên quan |
| --- | --- | --- |
| index.html | Dịch vụ Digital Marketing | Marketing Online, giải pháp công nghệ doanh nghiệp, Marketing thuê ngoài |
| dich-vu-ads-da-nen-tang.html | Dịch vụ chạy quảng cáo đa nền tảng | Google Ads, Facebook Ads, Instagram Ads, TikTok Ads, CPL, tracking chuyển đổi |
| dich-vu-cham-soc-zalo-oa.html | Dịch vụ chăm sóc Zalo OA | Zalo Official Account, quản trị OA, nội dung OA, kịch bản tư vấn |
| dich-vu-website-seo.html | Chăm sóc website & SEO | SEO tổng thể, audit SEO, SEO kỹ thuật, on-page, viết bài SEO, Search Console |
| dich-vu-marketing-tong-the.html | Marketing tổng thể | Phòng Marketing thuê ngoài, đội Digital thuê ngoài, Marketing cho SME |
| dich-vu-thiet-ke-website.html | Thiết kế website doanh nghiệp | Landing Page, responsive, website theo yêu cầu, CMS, SEO nền tảng |
| dich-vu-cong-cu-doanh-nghiep.html | Xây dựng công cụ doanh nghiệp | Marketing Automation, tích hợp API, ứng dụng nội bộ, xử lý Excel/CSV |
| dich-vu-social-media.html | Chăm sóc Fanpage & Social Media | Content Marketing, quản trị Fanpage Facebook, thiết kế bài đăng, video ngắn |

Đây là bản phân bổ chủ đề theo ý định tìm kiếm, chưa phải nghiên cứu lượng tìm kiếm hoặc độ khó từ khóa bằng dữ liệu GSC/Keyword Planner. Không có số volume, ranking hoặc KPI giả định được đưa vào website.

## Cơ sở đề xuất giá

Giá do Friday đề xuất theo quy mô đầu việc trong từng gói, hướng đến dịch vụ cho SME. Không phải giá bình quân thị trường hay báo giá đã được MarqByte xác nhận. Đã xem các trang giá công khai sau để đối chiếu cách tách phí quản lý, ngân sách quảng cáo, số lượng nội dung và hạng mục website (ngày 22/10/2026):

- https://kuroagency.vn/pricing
- https://gkdigital.vn/dich-vu/facebook/quan-ly-fanpage
- https://123website.com.vn/bang-gia-landing-page/

Không sao chép nội dung, không quy đồng các gói của nhà cung cấp khác. Giá công cụ tùy chỉnh, Zalo OA và gói tổng thể được đề xuất theo phạm vi công việc cụ thể; chưa tính giá vốn thực tế của MarqByte.

| Dịch vụ | Gói 1 | Gói 2 | Gói 3 | Đơn vị |
| --- | --- | --- | --- | --- |
| Quảng cáo đa nền tảng | 3.000.000 | 5.000.000 | 8.000.000 | đồng/tháng, chưa gồm media |
| Chăm sóc Zalo OA | 1.800.000 | 3.200.000 | 5.000.000 | đồng/tháng |
| Chăm sóc Website & SEO | 3.000.000 | 6.000.000 | 10.000.000 | đồng/tháng |
| Marketing tổng thể | 8.000.000 | 14.000.000 | 22.000.000 | đồng/tháng |
| Website / Landing Page | 3.500.000 | 7.500.000 | 15.000.000 | đồng/dự án |
| Công cụ doanh nghiệp | 5.000.000 | 12.000.000 | 25.000.000 | đồng/dự án |
| Social Media | 2.500.000 | 4.500.000 | 7.000.000 | đồng/tháng |

Trước khi dùng để báo giá thật: tính lại công thiết kế/viết bài, số giờ quản trị, review, thuế, hỗ trợ và biên lợi nhuận. Gói tổng thể có hạn mức riêng, không cộng quyền lợi của các gói lẻ. Điều kiện chi phí bên thứ ba, giới hạn và lịch thực hiện đã ghi tại từng trang.

## SEO đã triển khai

- Title và meta description riêng, H1 theo dịch vụ, H2/H3 theo nhu cầu đọc.
- Nội dung quan trọng và bảng giá nằm trong HTML, không phụ thuộc JavaScript mới hiển thị.
- Liên kết trang tổng quan → chi tiết → giá → form; dịch vụ liên quan và breadcrumb.
- Ảnh WebP, kích thước khai báo, srcset, lazy loading dưới màn hình đầu tiên, alt mô tả.
- Service structured data cho 7 dịch vụ, Organization trên trang chủ. Không khai báo rating hoặc khách hàng chưa có bằng chứng.
- Open Graph title/description, ngôn ngữ tiếng Việt; trang 404 đặt noindex.
- Nội dung bám nhu cầu người đọc, tham khảo nguyên tắc: https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=vi

## Cần tên miền thật để hoàn tất

Sau khi có URL GitHub Pages hoặc domain chính thức, chạy từ thư mục website:

```bash
python scripts/configure_seo.py https://YOUR-ACCOUNT.github.io/YOUR-REPO/
```

Thay URL mẫu bằng URL thật. Script bổ sung canonical tuyệt đối, og:url, ảnh chia sẻ tuyệt đối, sitemap.xml và robots.txt. Không dùng tên miền giả trong bản demo vì có thể khiến canonical trỏ sai khi upload. Sau khi cấu hình cần upload lại các file đã đổi. Xác minh Search Console và gửi sitemap khi triển khai chính thức; chưa thực hiện tác vụ đó trong bản source này.

## Hình ảnh và thông tin thương hiệu

7 ảnh được tạo riêng cho website, dùng như minh họa ý tưởng dịch vụ, không phải ảnh dự án hay ảnh khách hàng. Cùng ảnh dịch vụ được dùng lại trên thẻ tổng quan và 3 gói để thống nhất chủ đề, không phải 21 ảnh gốc khác nhau. Logo chữ hiện tại vẫn là bản tạm như phiên bản trước.
