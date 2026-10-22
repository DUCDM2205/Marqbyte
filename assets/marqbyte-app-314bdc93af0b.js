'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Mở menu');}
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu');});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();toggle?.focus();}});
document.addEventListener('click',event=>{if(nav?.classList.contains('open')&&!event.target.closest('header'))closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
const form=document.querySelector('#consult-form');
if(form){
 const service=new URLSearchParams(location.search).get('dich-vu');
 if(service&&Array.from(form.elements.service.options).some(option=>option.value===service))form.elements.service.value=service;
 const packageOptions={"ads-da-nen-tang": [{"name": "Khởi động", "price": "3.000.000đ /tháng"}, {"name": "Phát triển", "price": "5.000.000đ /tháng"}, {"name": "Đa kênh", "price": "8.000.000đ /tháng"}], "cham-soc-zalo-oa": [{"name": "Nền tảng", "price": "1.800.000đ /tháng"}, {"name": "Đồng hành", "price": "3.200.000đ /tháng"}, {"name": "Kết nối", "price": "5.000.000đ /tháng"}], "website-seo": [{"name": "Chăm sóc nền tảng", "price": "3.000.000đ /tháng"}, {"name": "SEO phát triển", "price": "6.000.000đ /tháng"}, {"name": "SEO đồng hành", "price": "10.000.000đ /tháng"}], "marketing-tong-the": [{"name": "Digital nền tảng", "price": "8.000.000đ /tháng"}, {"name": "Digital phát triển", "price": "14.000.000đ /tháng"}, {"name": "Đội Digital đồng hành", "price": "22.000.000đ /tháng"}], "thiet-ke-website": [{"name": "Landing Page", "price": "3.500.000đ /dự án"}, {"name": "Website giới thiệu", "price": "7.500.000đ /dự án"}, {"name": "Website có CMS", "price": "15.000.000đ /dự án"}], "cong-cu-doanh-nghiep": [{"name": "Prototype tác vụ", "price": "5.000.000đ /dự án"}, {"name": "Công cụ tích hợp", "price": "12.000.000đ /dự án"}, {"name": "Web app nội bộ", "price": "25.000.000đ /dự án"}], "social-media": [{"name": "Duy trì Fanpage", "price": "2.500.000đ /tháng"}, {"name": "Nội dung phát triển", "price": "4.500.000đ /tháng"}, {"name": "Social đồng hành", "price": "7.000.000đ /tháng"}]};
 const packageSelect=form.elements.package;
 function updatePackages(){
  packageSelect.replaceChildren(new Option("Tôi cần được tư vấn thêm", ""));
  (packageOptions[form.elements.service.value]||[]).forEach((p,i)=>packageSelect.add(new Option(p.name+" — từ "+p.price,String(i+1))));
 }
 updatePackages();
 const selectedPackage=new URLSearchParams(location.search).get("goi");
 if(selectedPackage&&Array.from(packageSelect.options).some(o=>o.value===selectedPackage))packageSelect.value=selectedPackage;
 form.elements.service.addEventListener("change",updatePackages);
 const date=form.elements.date;
 const now=new Date();const localDate=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');date.min=localDate;
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const name=String(data.get('name')).trim();
  if(!name){form.elements.name.setCustomValidity('Vui lòng nhập họ tên.');form.elements.name.reportValidity();return;}
  const serviceLabel=form.elements.service.selectedOptions[0].text;
  const body=['Xin chào MarqByte,','Tôi muốn được tư vấn với thông tin sau:','',`Họ tên: ${name}`,`Điện thoại: ${data.get('phone')}`,`Email: ${data.get('email')}`,`Doanh nghiệp: ${data.get('company')||'Chưa cung cấp'}`,`Dịch vụ: ${serviceLabel}`,`Gói: ${packageSelect.selectedOptions[0].text}`,`Thời gian đề xuất: ${data.get('date')||'Chưa chọn'} ${data.get('time')||''}`,`Nội dung: ${data.get('message')||'Trao đổi thêm khi liên hệ.'}`,'','Vui lòng liên hệ để xác nhận lịch trao đổi.'].join('\n');
  document.querySelector('#form-status').textContent='Đang mở ứng dụng email. Hãy kiểm tra nội dung và nhấn Gửi trong ứng dụng email. Nếu không mở được, vui lòng nhắn Zalo hoặc gọi 0777 800 720.';
  location.href=`mailto:ducaliw2100@gmail.com?subject=${encodeURIComponent('MarqByte — Yêu cầu tư vấn từ '+name)}&body=${encodeURIComponent(body)}`;
 });
 form.elements.name.addEventListener('input',()=>form.elements.name.setCustomValidity(''));
}
