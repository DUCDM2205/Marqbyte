import { useEffect, useState } from 'react';
import services from '../services.json';
export default function ContactForm(){
  const [service,setService]=useState('');
  const [plan,setPlan]=useState('');
  const [minDate,setMinDate]=useState('');
  const [status,setStatus]=useState('');
  const current=services.find(s=>s.slug===service);
  useEffect(()=>{
    const query=new URLSearchParams(window.location.search);
    const initial=services.find(s=>s.slug===query.get('dich-vu'));
    if(initial){setService(initial.slug);const id=Number(query.get('goi'));if(Number.isInteger(id)&&id>=1&&id<=initial.plans.length)setPlan(String(id));}
    const now=new Date();setMinDate([now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-'));
  },[]);
  function submit(event){
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form),name=String(data.get('name')||'').trim();
    if(!name){form.elements.name.setCustomValidity('Vui lòng nhập họ tên.');form.elements.name.reportValidity();return;}
    if(!form.reportValidity())return;
    const selected=current?.plans[Number(plan)-1];
    const body=['Xin chào MarqByte,','Tôi muốn được tư vấn với thông tin sau:','',`Họ tên: ${name}`,`Điện thoại: ${data.get('phone')}`,`Email: ${data.get('email')}`,`Doanh nghiệp: ${data.get('company')||'Chưa cung cấp'}`,`Dịch vụ: ${current?.name||'Tôi cần được tư vấn thêm'}`,`Gói: ${selected?selected[0]+' — từ '+selected[1]+'đ '+selected[2]:'Tôi cần được tư vấn thêm'}`,`Thời gian đề xuất: ${data.get('date')||'Chưa chọn'} ${data.get('time')||''}`,`Nội dung: ${data.get('message')||'Trao đổi thêm khi liên hệ.'}`,'','Vui lòng liên hệ để xác nhận lịch trao đổi.'].join('\n');
    setStatus('Đang mở ứng dụng email. Hãy kiểm tra nội dung và nhấn Gửi. Nếu không mở được, vui lòng nhắn Zalo hoặc gọi 0777 800 720.');
    window.location.href=`mailto:ducaliw2100@gmail.com?subject=${encodeURIComponent('MarqByte — Yêu cầu tư vấn từ '+name)}&body=${encodeURIComponent(body)}`;
  }
  return <form id="consult-form" className="contact-form" onSubmit={submit}>
    <h3>Chia sẻ nhu cầu của bạn</h3><p>Điền thông tin để soạn yêu cầu tư vấn qua email.</p>
    <div className="form-row">
      <label>Họ và tên *<input name="name" required maxLength={100} autoComplete="name" placeholder="Tên của bạn" onInput={e=>e.currentTarget.setCustomValidity('')} /></label>
      <label>Số điện thoại *<input type="tel" name="phone" required pattern="[+0-9 ]{9,20}" autoComplete="tel" placeholder="Số điện thoại liên hệ" /></label>
    </div>
    <label>Email *<input type="email" name="email" required autoComplete="email" placeholder="ban@doanhnghiep.vn" /></label>
    <label>Doanh nghiệp<input name="company" maxLength={150} autoComplete="organization" placeholder="Tên doanh nghiệp / thương hiệu" /></label>
    <label htmlFor="service">Dịch vụ quan tâm</label>
    <select id="service" name="service" aria-label="Dịch vụ quan tâm" value={service} onChange={e=>{setService(e.target.value);setPlan('');}}>
      <option value="">Tôi cần được tư vấn thêm</option>
      {services.map(s=><option key={s.slug} value={s.slug}>{s.name}</option>)}
    </select>
    <label htmlFor="package">Gói dịch vụ</label>
    <select id="package" name="package" aria-label="Gói dịch vụ" value={plan} onChange={e=>setPlan(e.target.value)}>
      <option value="">Tôi cần được tư vấn thêm</option>
      {(current?.plans||[]).map((p,i)=><option key={p[0]} value={String(i+1)}>{p[0]} — từ {p[1]}đ {p[2]}</option>)}
    </select>
    <p className="form-package-help">Bạn có thể chọn “Tôi cần được tư vấn thêm” nếu chưa xác định gói phù hợp.</p>
    <div className="form-row"><label>Ngày muốn trao đổi<input type="date" name="date" min={minDate||undefined} /></label><label>Thời gian gợi ý<input type="time" name="time" /></label></div>
    <label>Bài toán của bạn<textarea name="message" rows={4} maxLength={2000} placeholder="Mục tiêu, nhu cầu hoặc vấn đề bạn muốn giải quyết..." /></label>
    <label className="checkbox"><input type="checkbox" required /> Tôi đồng ý chia sẻ thông tin trên để MarqByte liên hệ tư vấn.</label>
    <button className="button" type="submit">Soạn email yêu cầu tư vấn <span>↗</span></button>
    <p className="form-note">Biểu mẫu mở ứng dụng email của bạn. Yêu cầu chỉ được gửi sau khi bạn nhấn Gửi trong ứng dụng đó. Bạn cũng có thể gọi hoặc nhắn Zalo trực tiếp.</p>
    <div id="form-status" role="status" aria-live="polite">{status}</div>
  </form>;
}
