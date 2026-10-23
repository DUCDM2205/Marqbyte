import PageTinTuc, {ArticlePage} from './pages/PageTinTuc.jsx';
import {articles,articleUrl} from './news.js';
import Page404 from './pages/Page404.jsx';
import PageBangGia from './pages/PageBangGia.jsx';
import PageDichVuAdsDaNenTang from './pages/PageDichVuAdsDaNenTang.jsx';
import PageDichVuChamSocZaloOa from './pages/PageDichVuChamSocZaloOa.jsx';
import PageDichVuCongCuDoanhNghiep from './pages/PageDichVuCongCuDoanhNghiep.jsx';
import PageDichVuMarketingTongThe from './pages/PageDichVuMarketingTongThe.jsx';
import PageDichVuSocialMedia from './pages/PageDichVuSocialMedia.jsx';
import PageDichVuThietKeWebsite from './pages/PageDichVuThietKeWebsite.jsx';
import PageDichVuWebsiteSeo from './pages/PageDichVuWebsiteSeo.jsx';
import PageDichVu from './pages/PageDichVu.jsx';
import PageGiaiPhap from './pages/PageGiaiPhap.jsx';
import PageGioiThieu from './pages/PageGioiThieu.jsx';
import PageIndex from './pages/PageIndex.jsx';
import PageLienHe from './pages/PageLienHe.jsx';

export const pages = {
  "tin-tuc.html": PageTinTuc,
  ...Object.fromEntries(articles.map(article=>[articleUrl(article),()=> <ArticlePage article={article}/>])),
  "404.html": Page404,
  "bang-gia.html": PageBangGia,
  "dich-vu-ads-da-nen-tang.html": PageDichVuAdsDaNenTang,
  "dich-vu-cham-soc-zalo-oa.html": PageDichVuChamSocZaloOa,
  "dich-vu-cong-cu-doanh-nghiep.html": PageDichVuCongCuDoanhNghiep,
  "dich-vu-marketing-tong-the.html": PageDichVuMarketingTongThe,
  "dich-vu-social-media.html": PageDichVuSocialMedia,
  "dich-vu-thiet-ke-website.html": PageDichVuThietKeWebsite,
  "dich-vu-website-seo.html": PageDichVuWebsiteSeo,
  "dich-vu.html": PageDichVu,
  "giai-phap.html": PageGiaiPhap,
  "gioi-thieu.html": PageGioiThieu,
  "index.html": PageIndex,
  "lien-he.html": PageLienHe,
};
