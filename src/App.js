import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem Ipsum</p>
        <a href='#' target='_blank' className='text-uppercase cta-btn'>contact me</a>
      </div>
    </div>
  );
}

export default App;
