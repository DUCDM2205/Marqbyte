import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Motion from './components/Motion.jsx';
import { pages } from './Pages.jsx';
export default function App({page='index.html'}){
 const Page=pages[page]||pages['404.html'];
 return <><a className="skip" href="#main">Đến nội dung chính</a><Header page={page}/><main id="main"><Page/></main><Footer/><Motion/></>;
}
