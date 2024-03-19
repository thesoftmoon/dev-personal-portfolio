import './App.scss';
import Navbar from './components/Navbar';
import headerPcVideo from './vid/header-vid-pc.mp4';
import headerMoVideo from './vid/header-vid-mo.mp4';
import Whatido from './components/Whatido';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import blackFavicon from './favicon/favicon-tp-black.ico';
import { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import textTitleEs from './locales/es/global.json';
import textTitleEn from './locales/en/global.json';

function App() {
  
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      once: true,
      //easing: 'ease-in-sine',
      delay: 150,
    });
  }, [])

  useEffect(() => {
    const onBlur = () => {
      document.title = i18n.language === "es" ? textTitleEs.siteTitle.onBlur : textTitleEn.siteTitle.onBlur;
    }
    const onFocus = () => {
      document.title = i18n.language === "es" ? textTitleEs.siteTitle.onFocus : textTitleEn.siteTitle.onFocus;
    }
    window.onblur = onBlur;
    window.onfocus = onFocus;

    let faviconLink = document.querySelector("link[rel~='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(faviconLink);
    }
    faviconLink.href = blackFavicon;
  }, []);



  return (
    <div className="container">
      <Navbar />
      <div className='row d-md-flex align-items-center justify-content-between hero-header'>
        <div className='col-12 col-md-5 img-container d-flex d-md-none'>
          {/* <img src={headerMo} alt='header pc' className='img-animation'/> */}
          <video autoPlay muted playsInline loop >
            <source src={headerMoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='col-12 col-md-5 main-info'>
          <h1 className='heading-hero'>{t("heroHeader.title")}</h1>
          <p className='paragraph-hero'>{t("heroHeader.subTitle")}</p>
          <a href='#contact' className='text-uppercase cta-btn'>{t("heroHeader.ctaBtn")}</a>
        </div>
        <div className='col-12 col-md-6 img-container d-none d-md-flex'>
          {/* <img src={headerPc} alt='header pc' className='img-animation'/> */}
          <video autoPlay muted playsInline loop >
            <source src={headerPcVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Whatido />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
