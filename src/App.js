import './App.scss';
import Navbar from './components/Navbar';
import headerPc from './img/header-img-pc.jpg';
import headerMo from './img/header-img-mo.jpg';
import Whatido from './components/Whatido';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {
  const headingHeroTxt = `Hi, i'm Tomás, a designer and front-end dev with 7 years of experience`;
  const paragraphHeroTxt = `My career evolution has driven me to create different web and digital solutions of first level for all my clients, with a user centric methodology.`
  
  
  useEffect (()=>{
   const onBlur = ()=>{
    document.title = 'You need a Dev? :)';
   }
   const onFocus = ()=>{
    document.title = 'TP | UI/UX and Front-end dev';
   }
    window.onblur = onBlur;
    window.onfocus = onFocus;
  });


  return (
    <div className="container">
      <Navbar/>
      <div className='row d-md-flex align-items-center justify-content-between hero-header'>
        <div className='col-12 col-md-5 img-container d-flex d-md-none'>
          <img src={headerMo} alt='header pc' className='img-animation'/>
        </div>
        <div className='col-12 col-md-5 main-info'>
          <h1 className='heading-hero'>{headingHeroTxt}</h1>
          <p className='paragraph-hero'>{paragraphHeroTxt}</p>
          <a href='#contact' className='text-uppercase cta-btn'>contact me</a>
        </div>
        <div className='col-12 col-md-5 img-container d-none d-md-flex'>
          <img src={headerPc} alt='header pc' className='img-animation'/>
        </div>
      </div>
        <Whatido/>
        <Portfolio/>
        <Contact/>
    </div>
  );
}

export default App;
