import './App.scss';
import Navbar from './components/Navbar';
import headerPc from './img/header-img-pc.jpg';
import Whatido from './components/Whatido';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const headingHeroTxt = `Hi, i'm Tomás, a designer and front-end dev with 7 years of experience`;
  const paragraphHeroTxt = `My career evolution has driven me to create different web and digital solutions of first level for all my clients, with a user centric methodology.`

  return (
    <div className="container">
      <Navbar/>
      <div className='row d-md-flex align-items-center justify-content-between'>
        <div className='col-12 col-md-5'>
          <h1 className='heading-hero'>{headingHeroTxt}</h1>
          <p className='paragraph-hero'>{paragraphHeroTxt}</p>
          <a href='#' target='_blank' className='text-uppercase cta-btn'>contact me</a>
        </div>
        <div className='col-12 col-md-5 img-container'>
          <img src={headerPc} alt='header pc' className='img-animation'/>
        </div>
        <Whatido/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
