# MarqByte — ReactJS

React 19 + Vite. Giữ giao diện trắng/xanh lá/đen, CSS, nội dung SEO, 7 ảnh minh họa và 21 gói dịch vụ từ bản đã duyệt. Thêm hiệu ứng xuất hiện nhẹ khi cuộn, chuyển động chậm trên đồ họa trang chủ và hover thẻ/nút. Tôn trọng `prefers-reduced-motion`; nội dung không bị ẩn nếu JavaScript hoặc animation không chạy.

14 trang được prerender thành HTML khi build, sau đó React hydrate để điều khiển menu, biểu mẫu và hiệu ứng. Không cần server Node chạy trên GitHub Pages. Giữ các URL `.html`, không dùng hash routing. Mở trực tiếp hoặc reload các trang dịch vụ trên Pages hoạt động nhờ có file HTML thật.

## Hai cách đưa lên GitHub Pages

### Cách 1 — Muốn xem ngay trên repository Pages hiện tại

Trong bộ source đã có thư mục `dist` được build sẵn:

1. Mở thư mục `dist`.
2. Upload **nội dung bên trong** `dist` vào vị trí đang xuất bản trên repository cũ, ghi đè các file HTML và `assets` cùng lúc. Không đưa cả thư mục `dist` thành thư mục con của trang chủ.
3. Giữ Settings → Pages → Deploy from a branch → đúng nhánh và `/ (root)` như website tĩnh trước đây.
4. Commit changes, chờ Pages deployment thành công, mở website và Ctrl+Shift+R.

Bản build sẵn vẫn chạy React: JavaScript và CSS đã được đóng gói trong `dist/assets`. Không upload source `index.html` ở gốc dự án theo cách này vì nó là đầu vào Vite và không chạy trực tiếp trên Pages.

Bản build đính kèm chưa biết URL công khai của Blue nên chưa thêm canonical tuyệt đối/sitemap theo domain. Khi sử dụng Cách 2, workflow tự lấy URL Pages thực và bổ sung khi build. Có thể build thủ công với SITE_URL để bổ sung như phần SEO bên dưới.

### Cách 2 — Lưu source React và tự động build khi cập nhật

1. Chuẩn bị repository mới hoặc checkout sạch. Đưa toàn bộ nội dung bên trong thư mục `marqbyte-react` vào thư mục gốc repository: `src`, `public`, `scripts`, `.github`, `.gitignore`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js` và các tài liệu.
2. Không upload `node_modules` hoặc `.ssr`. Không cần commit `dist`; workflow tự build. Nếu dùng repository cũ, cần thay `index.html` cũ bằng file đầu vào Vite, và tránh giữ workflow deploy khác chạy đồng thời.
3. Vào Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. Push/commit lên nhánh `main`. Nếu nhánh chính có tên khác, sửa `branches: [main]` trong `.github/workflows/deploy.yml`.
5. Vào tab Actions. Workflow **Deploy MarqByte React to GitHub Pages** sẽ cài dependencies, build, dựng sẵn 14 trang, kiểm tra liên kết và deploy thư mục `dist`.
6. Khi deploy thành công, mở URL được GitHub Pages cung cấp. Các lần cập nhật sau chỉ cần push source.

Nếu lần chạy đầu xảy ra trước khi bật Pages, bật Source = GitHub Actions rồi vào Actions → chọn workflow → Run workflow. File `.github/workflows/deploy.yml` phải có trong repository; kiểm tra thư mục này nếu upload qua trình duyệt.

## Chạy trên VS Code / Windows

Cài Node.js 22 LTS (22.12 trở lên) hoặc bản LTS mới hơn tương thích. Mở đúng thư mục có `package.json`, chọn Terminal → New Terminal:

```bash
npm ci
npm run dev
```

Mở địa chỉ Local được terminal hiển thị. Nhấn Ctrl+C để dừng. Những lần sau chỉ cần `npm run dev` nếu dependencies không đổi. Không mở source `index.html` bằng cách double-click vì trình duyệt cần Vite xử lý JSX/module.

Kiểm tra bản build:

```bash
npm run build
npm run preview
```

Lệnh `npm run build` thực hiện: build client với Vite → build renderer React → prerender 14 trang → kiểm tra HTML, liên kết, ảnh, JSON-LD và số gói. Thư mục `dist` là kết quả để xuất bản, `.ssr` chỉ là trung gian build.

## Cấu hình URL SEO khi build thủ công

Workflow GitHub Actions tự truyền URL Pages thông qua `SITE_URL`. Nếu build trên máy:

PowerShell, thay URL ví dụ bằng URL thật:

```powershell
$env:SITE_URL = "https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/"
npm run build
```

macOS/Linux:

```bash
SITE_URL=https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/ npm run build
```

Khi có SITE_URL, build tạo canonical, og:url, ảnh chia sẻ tuyệt đối, robots.txt và sitemap.xml cho 13 trang có thể lập chỉ mục. Không đưa trang 404 vào sitemap. Nếu chưa có URL, website vẫn build/chạy được; không tạo canonical trỏ đến một domain giả.

Đường dẫn asset của Vite dùng `base: './'`, các trang HTML và ảnh dùng đường dẫn tương đối: chạy được ở domain gốc và `/repository/` mà không phải hard-code tên repository. Khi dùng domain riêng, Pages base URL cần phản ánh cấu hình domain thực tế.

## Cấu trúc source

- `src/App.jsx`: bố cục dùng chung.
- `src/components/Header.jsx`: nhận diện, điều hướng, menu mobile dùng React state.
- `src/components/Footer.jsx`: footer và nút Zalo giữ giao diện cũ.
- `src/components/ContactForm.jsx`: form tư vấn, chọn dịch vụ/gói, soạn email.
- `src/components/Motion.jsx`: IntersectionObserver và Web Animations API, có cleanup và hỗ trợ giảm chuyển động.
- `src/pages/*.jsx`: nội dung từng trang, JSX thật; không bọc HTML cũ bằng iframe hoặc dangerouslySetInnerHTML.
- `src/styles/site.css`: giao diện đã duyệt, gồm các bản sửa tràn ảnh/grid.
- `src/styles/motion.css`: chỉ các chuyển động bổ sung.
- `src/services.json`: dữ liệu dịch vụ dùng cho lựa chọn gói trong form. Khi đổi tên/giá gói, cập nhật cả nội dung trang JSX tương ứng để không lệch với form.
- `src/page-meta.json`: title, description, Open Graph và JSON-LD theo từng trang. Khi đổi nội dung SEO, sửa dữ liệu này.
- `src/Pages.jsx`: danh sách URL và component trang.
- `scripts/prerender.mjs`: dựng HTML từ React, bổ sung URL SEO khi có SITE_URL.
- `scripts/verify-build.mjs`: kiểm tra bản xuất bản.
- `public/assets`: hình WebP và favicon; Vite giữ nguyên các ảnh này.
- `.github/workflows/deploy.yml`: tự build và deploy GitHub Pages.

Không cần chạy script version_assets.py của bản HTML cũ. Vite tự sinh tên file JavaScript/CSS có mã hash mỗi lần nội dung thay đổi để tránh cache cũ.

## Phạm vi giữ nguyên

- Bảng màu, font, bố cục, ảnh, nội dung dịch vụ và mức giá tham khảo.
- Gọi điện, Zalo, email, form đề xuất lịch hẹn.
- Form vẫn mở ứng dụng email, không có backend/CRM hoặc đặt lịch tự xác nhận. Chỉ gửi sau khi khách nhấn Gửi trong ứng dụng email.
- Logo vẫn là nhận diện chữ tạm từ bản trước; chưa thay bằng logo chính thức chưa được cung cấp ở dạng truy cập được.

## Kiểm tra đã chạy

- Production build và kiểm tra 14 trang prerender; giữ liên kết .html.
- 18 bố cục: 6 trang đại diện tại 390, 768 và 1280px; không tràn ngang, React hydrate thành công.
- Mở trực tiếp trang dịch vụ trong thư mục `/repository-test/`, ảnh và CSS/JS tải được.
- Chọn gói SEO từ trang dịch vụ → form chọn sẵn gói 2; đổi dịch vụ cập nhật đúng danh sách gói.
- Menu mobile mở/đóng bằng React, Escape đóng menu.
- Không ghi nhận lỗi ứng dụng/hydration trong các trang đã kiểm tra.

Workflow được cấu hình sẵn nhưng chưa chạy trong repository GitHub của Blue. Cần upload/push và chọn nguồn GitHub Pages như hướng dẫn để deploy thật.

## Tài liệu chính thức

- https://vite.dev/guide/static-deploy.html
- https://react.dev/reference/react-dom/client/hydrateRoot
- https://react.dev/reference/react-dom/server/renderToString
