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
 const date=form.elements.date;
 const now=new Date();const localDate=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');date.min=localDate;
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const name=String(data.get('name')).trim();
  if(!name){form.elements.name.setCustomValidity('Vui lòng nhập họ tên.');form.elements.name.reportValidity();return;}
  const serviceLabel=form.elements.service.selectedOptions[0].text;
  const body=['Xin chào MarqByte,','Tôi muốn được tư vấn với thông tin sau:','',`Họ tên: ${name}`,`Điện thoại: ${data.get('phone')}`,`Email: ${data.get('email')}`,`Doanh nghiệp: ${data.get('company')||'Chưa cung cấp'}`,`Dịch vụ: ${serviceLabel}`,`Thời gian đề xuất: ${data.get('date')||'Chưa chọn'} ${data.get('time')||''}`,`Nội dung: ${data.get('message')||'Trao đổi thêm khi liên hệ.'}`,'','Vui lòng liên hệ để xác nhận lịch trao đổi.'].join('\n');
  document.querySelector('#form-status').textContent='Đang mở ứng dụng email. Hãy kiểm tra nội dung và nhấn Gửi trong ứng dụng email. Nếu không mở được, vui lòng nhắn Zalo hoặc gọi 0777 800 720.';
  location.href=`mailto:ducaliw2100@gmail.com?subject=${encodeURIComponent('MarqByte — Yêu cầu tư vấn từ '+name)}&body=${encodeURIComponent(body)}`;
 });
 form.elements.name.addEventListener('input',()=>form.elements.name.setCustomValidity(''));
}
