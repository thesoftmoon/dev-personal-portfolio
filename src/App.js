import './App.scss';
import Navbar from './components/Navbar';
import headerPcVideo from './vid/header-vid-pc.mp4';
import headerMoVideo from './vid/header-vid-mo.mp4';
import Whatido from './components/Whatido';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import blackFavicon from './favicon/favicon-tp-black.ico';
import { useEffect, useState } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestComponent from './components/TestComponent'

function App() {
  const headingHeroTxt = `Hi, i'm Tomás, a designer and front-end dev with 7 years of mixed experience`;
  const paragraphHeroTxt = `My career evolution has driven me to create different web and digital solutions of first level for all my clients, with a user centric methodology.`;
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      //easing: 'ease-in-sine',
      delay: 150,
    });
  }, [])
  
  useEffect (()=>{
   const onBlur = ()=>{
    document.title = 'You need a Dev? :)';
   }
   const onFocus = ()=>{
    document.title = 'TP | UI/UX and Front-end dev';
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
      <Navbar/>
      <div className='row d-md-flex align-items-center justify-content-between hero-header'>
        <div className='col-12 col-md-5 img-container d-flex d-md-none'>
          {/* <img src={headerMo} alt='header pc' className='img-animation'/> */}
          <video  autoPlay muted playsInline loop >
            <source src={headerMoVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='col-12 col-md-5 main-info'>
          <h1 className='heading-hero'>{headingHeroTxt}</h1>
          <p className='paragraph-hero'>{paragraphHeroTxt}</p>
          <a href='#contact' className='text-uppercase cta-btn'>contact me</a>
        </div>
        <div className='col-12 col-md-6 img-container d-none d-md-flex'>
          {/* <img src={headerPc} alt='header pc' className='img-animation'/> */}
          <video autoPlay muted playsInline loop >
            <source src={headerPcVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
        <Whatido/>
        <Portfolio/>
        <Contact/>
        <TestComponent />
    </div>
  );
}

export default App;
