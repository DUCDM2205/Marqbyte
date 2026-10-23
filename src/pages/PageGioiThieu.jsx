import '../styles/about.css';

const approach = [
 ['01', 'Hiểu trước khi đề xuất', 'Mỗi doanh nghiệp có một điểm xuất phát.', 'Một cửa hàng cần khách ghé thăm. Một trường học cần phụ huynh để lại thông tin. Một thương hiệu thương mại điện tử cần hành trình mua hàng thuận tiện hơn. MarqByte bắt đầu bằng việc hiểu khách hàng, sản phẩm, nguồn lực và mục tiêu của bạn để chọn đúng việc cần ưu tiên.'],
 ['02', 'Kết nối trước khi mở rộng', 'Từng điểm chạm cần cùng kể một câu chuyện.', 'Quảng cáo dẫn về đâu? Website đã giải thích đủ rõ chưa? Khi khách nhắn Zalo, ai tiếp nhận và chăm sóc? Chúng tôi nhìn các kênh như một hành trình liền mạch, để nội dung, trải nghiệm và quy trình hỗ trợ cùng hướng đến mục tiêu kinh doanh.'],
 ['03', 'Đo lường để đi tiếp', 'Một báo cáo tốt phải gợi mở được hành động.', 'Thống nhất chỉ số phù hợp, ghi nhận phản hồi và rà soát kết quả theo từng giai đoạn. Khi có đủ dữ liệu, chúng ta cùng quyết định nên duy trì điều gì, cải thiện điều gì và đầu tư thêm vào đâu.']
];
const promises = [
 ['Phạm vi minh bạch', 'Đầu việc, sản phẩm bàn giao, lịch triển khai và các khoản chi phí được thống nhất trong đề xuất hợp tác.'],
 ['Dữ liệu có bối cảnh', 'Kết quả được trao đổi cùng nguồn dữ liệu, thời gian đo lường và những giới hạn cần lưu ý khi đánh giá.'],
 ['Tài sản được bàn giao', 'Quyền quản trị, tài liệu và các hạng mục bàn giao được xác định rõ theo phạm vi dự án đã thống nhất.'],
 ['Công cụ phục vụ con người', 'Ưu tiên giải pháp dễ sử dụng, có hướng dẫn và phù hợp với người trực tiếp vận hành tại doanh nghiệp.']
];
function BrandVisual() {
 return <div className="about-visual" role="img" aria-label="Đồ họa MarqByte kết nối chiến lược, nội dung, dữ liệu và công nghệ">
  <div className="about-orbit orbit-a"/><div className="about-orbit orbit-b"/>
  <div className="about-cross cross-a">+</div><div className="about-cross cross-b">+</div>
  <div className="about-node node-a"><i>↗</i><span>Chiến lược<small>Đúng hướng đi</small></span></div>
  <div className="about-node node-b"><i>✳</i><span>Nội dung<small>Đúng thông điệp</small></span></div>
  <div className="about-brand-core"><span>M<span>↗</span></span><small>MARQBYTE</small></div>
  <div className="about-node node-c"><i>⌘</i><span>Công nghệ<small>Kết nối vận hành</small></span></div>
  <div className="about-node node-d"><i>▥</i><span>Dữ liệu<small>Cơ sở cải thiện</small></span></div>
  <div className="about-visual-caption"><span className="live-dot"/> MARKETING × TECHNOLOGY</div>
 </div>;
}
export default function PageGioiThieu() {
 return <div className="about-page">
  <section className="container about-hero">
   <div className="breadcrumb"><a href="index.html">Trang chủ</a><span>/</span>Về MarqByte</div>
   <div className="about-hero-grid">
    <div className="hero-copy"><span className="eyebrow">CÂU CHUYỆN MARQBYTE</span><h1>Ý tưởng cần<br/>một hướng đi.<br/><span className="green">Tăng trưởng cần<br/>sự kết nối.</span></h1><p>MarqByte kết nối Digital Marketing và công nghệ để doanh nghiệp xây dựng hiện diện số rõ ràng, vận hành có hệ thống và từng bước phát triển.</p><a className="button" href="#cau-chuyen">Khám phá câu chuyện <span>↓</span></a></div>
    <BrandVisual/>
   </div>
   <div className="about-hero-foot"><span>THINK WITH PURPOSE. BUILD WITH CARE.</span><span>Chiến lược rõ ràng. Triển khai thiết thực.</span></div>
  </section>

  <section id="cau-chuyen" className="about-origin section">
   <div className="container about-story-grid"><div><span className="eyebrow">01 / ĐIỂM KHỞI ĐẦU</span><h2>Có nhiều hoạt động.<br/>Nhưng đã có<br/><em>một hướng đi chung?</em></h2></div><div className="about-prose"><p className="about-lead">Một bài đăng mới. Một chiến dịch quảng cáo. Một website vừa hoàn thành. Doanh nghiệp đang làm rất nhiều việc để được khách hàng nhìn thấy.</p><p>Nhưng khi mỗi kênh đi theo một hướng, người vận hành vẫn phải tự nối các mảnh ghép: nội dung ở một nơi, dữ liệu ở một nơi, thông tin khách hàng nằm trong những cuộc trò chuyện riêng lẻ. Thêm công cụ đôi khi lại thêm việc phải quản lý.</p><p>Đó là bài toán MarqByte muốn cùng doanh nghiệp giải quyết: làm thế nào để những nỗ lực marketing có thể hỗ trợ lẫn nhau và gắn với công việc kinh doanh hằng ngày?</p><p>Chúng tôi chọn bắt đầu từ sự kết nối. Giữa mục tiêu và kế hoạch. Giữa thông điệp và trải nghiệm. Giữa người làm marketing, công nghệ và người trực tiếp chăm sóc khách hàng.</p></div></div>
  </section>

  <section className="container section about-name">
   <div className="about-wordmark" aria-label="MarqByte"><span>Marq<span className="green">Byte</span><b>.</b></span><div><small>THẤU HIỂU THỊ TRƯỜNG</small><span>+</span><small>TƯ DUY CÔNG NGHỆ</small></div></div>
   <div className="about-name-copy"><span className="eyebrow">02 / TINH THẦN THƯƠNG HIỆU</span><h2>Hai góc nhìn.<br/>Một cách giải bài toán.</h2><p>Với MarqByte, marketing bắt đầu từ việc hiểu con người: họ cần gì, đang băn khoăn điều gì và vì sao họ lựa chọn một thương hiệu.</p><p>Công nghệ giúp biến sự thấu hiểu ấy thành trải nghiệm và quy trình cụ thể: một website dễ tìm thông tin, một luồng chăm sóc khách hàng rõ ràng, một công cụ giúp giảm thao tác lặp lại.</p><p><strong>Thấu hiểu để chọn đúng. Xây dựng để dùng được. Đo lường để cải thiện.</strong> Đó là tinh thần chúng tôi muốn thể hiện trong từng dự án.</p></div>
  </section>

  <section className="about-manifesto"><div className="container"><span className="eyebrow">ĐIỀU CHÚNG TÔI THEO ĐUỔI</span><h2>Mỗi điểm chạm<br/>đều có <span>một vai trò.</span><br/>Mỗi bước tiến<br/>đều có <span>một cơ sở.</span></h2><div className="about-manifesto-bottom"><span aria-hidden="true">✳</span><p>Chúng tôi tin rằng doanh nghiệp nhỏ cũng xứng đáng có một nền tảng marketing chỉn chu — với ưu tiên rõ ràng, công cụ phù hợp và khả năng duy trì trong thực tế.</p></div></div></section>

  <section className="container section about-approach"><div className="section-head"><div><span className="eyebrow">03 / TỪ TƯ DUY ĐẾN HÀNH ĐỘNG</span><h2>Hiểu sâu hơn.<br/>Làm sát hơn.</h2></div><p>Giải pháp tốt cần phù hợp với giai đoạn phát triển, ngân sách và đội ngũ đang vận hành doanh nghiệp.</p></div>{approach.map(([n,title,lead,body])=><article className="about-approach-row" key={n}><span className="about-number">{n}</span><h3>{title}</h3><div><strong>{lead}</strong><p>{body}</p></div></article>)}</section>

  <section className="about-ecosystem section"><div className="container"><div className="section-head"><div><span className="eyebrow">04 / NHỮNG MẢNH GHÉP CHÚNG TÔI KẾT NỐI</span><h2>Một hành trình.<br/>Nhiều cách đồng hành.</h2></div><p>Bạn có thể bắt đầu từ một nhu cầu cụ thể, rồi mở rộng khi nền tảng và nguồn lực đã sẵn sàng.</p></div><div className="about-capabilities">
   <article><img src="assets/dich-vu-social.webp" alt="Minh họa nội dung và các điểm chạm truyền thông số" width="1536" height="1024" loading="lazy"/><div><span className="eyebrow">HIỆN DIỆN & THU HÚT</span><h3>Để khách hàng biết đến bạn.</h3><p>Kết nối quảng cáo đa nền tảng, Social Media và định hướng Marketing tổng thể để truyền tải thông điệp nhất quán tới nhóm khách hàng phù hợp.</p><a className="text-link" href="dich-vu.html">Khám phá các dịch vụ <span>↗</span></a></div></article>
   <article><img src="assets/dich-vu-website.webp" alt="Minh họa website và hành trình tìm hiểu dịch vụ" width="1536" height="1024" loading="lazy"/><div><span className="eyebrow">TRẢI NGHIỆM & CHUYỂN ĐỔI</span><h3>Để sự quan tâm có bước tiếp theo.</h3><p>Thiết kế website, Landing Page, chăm sóc website SEO và Zalo OA giúp khách hàng tìm hiểu, liên hệ và tiếp tục tương tác với doanh nghiệp.</p><a className="text-link" href="dich-vu-thiet-ke-website.html">Khám phá giải pháp website <span>↗</span></a></div></article>
   <article><img src="assets/dich-vu-tools.webp" alt="Minh họa công cụ doanh nghiệp kết nối dữ liệu và quy trình" width="1536" height="1024" loading="lazy"/><div><span className="eyebrow">CÔNG NGHỆ & VẬN HÀNH</span><h3>Để đội ngũ có thêm thời gian.</h3><p>Xây dựng công cụ doanh nghiệp theo nhu cầu thực tế, hỗ trợ xử lý công việc lặp lại, quản lý thông tin và tổ chức quy trình làm việc rõ ràng hơn.</p><a className="text-link" href="dich-vu-cong-cu-doanh-nghiep.html">Khám phá công cụ doanh nghiệp <span>↗</span></a></div></article>
  </div></div></section>

  <section className="container section about-trust"><div className="about-trust-intro"><span className="eyebrow">05 / NIỀM TIN ĐẾN TỪ CÁCH LÀM</span><h2>Rõ ràng từ đầu.<br/>Đồng hành trong<br/><span className="green">từng bước.</span></h2><p>Một mối quan hệ hợp tác bền vững cần sự minh bạch. Với MarqByte, đây là những nguyên tắc để hai bên cùng làm việc và đánh giá kết quả.</p><a className="text-link" href="bang-gia.html">Xem gói dịch vụ và giá tham khảo ↗</a></div><div className="about-promises">{promises.map(([title,body],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

  <section className="container about-partner"><span className="eyebrow">DÀNH CHO DOANH NGHIỆP ĐANG MUỐN TIẾN LÊN</span><h2>Bắt đầu ở đâu cũng được.<br/>Miễn là có bước tiếp theo rõ ràng.</h2><p>Doanh nghiệp nhỏ và vừa, cửa hàng địa phương, trường học hay thương hiệu thương mại điện tử đều có những bài toán riêng. MarqByte có thể tham gia một dự án cụ thể, hỗ trợ vận hành theo tháng hoặc phối hợp cùng đội ngũ nội bộ theo phạm vi đã thống nhất.</p><div className="about-audiences"><span>Doanh nghiệp SME</span><span>Cửa hàng địa phương</span><span>Trường học</span><span>Thương mại điện tử</span></div></section>

  <section className="container about-final"><div><span className="eyebrow">VIẾT TIẾP CÂU CHUYỆN CÙNG MARQBYTE</span><h2>Bước tiếp theo<br/>bắt đầu từ <em>bạn.</em></h2><p>Chia sẻ mục tiêu, điều đang vướng và nguồn lực hiện có. Chúng ta cùng xác định việc nên làm trước và một cách triển khai phù hợp.</p><div className="actions"><a className="button" href="lien-he.html">Đặt lịch trao đổi <span>↗</span></a><a className="text-link" href="https://zalo.me/0777800720" target="_blank" rel="noopener noreferrer">Nhắn Zalo cho MarqByte ↗</a></div></div><div className="about-signature"><span>MarqByte.</span><p>Marketing có định hướng.<br/>Công nghệ tạo khác biệt.</p><a href="tel:0777800720">0777 800 720</a><a href="mailto:ducaliw2100@gmail.com">ducaliw2100@gmail.com</a></div></section>
 </div>;
}
